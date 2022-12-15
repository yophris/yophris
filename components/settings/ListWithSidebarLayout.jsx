import { Stack } from '@mui/material';
import AppButton from 'components/AppButton';
import AppDivider from 'components/AppDivider';
import AppForm from 'components/fields/AppForm';
import SearchInput from 'components/fields/SearchInput';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { jsonToFormData } from 'requests';
import useFileUploadStore from 'store/useFileUploadStore';
import { extractFromJSON } from 'Utils';
import EditableList from './EditableList';
import SettingDrawer from './SettingDrawer';

const ListWithSidebarLayout = ({ config }) => {
  const {
    endpoint,
    texts,
    getAllFn,
    postFn,
    key,
    deleteFn,
    validation,
    putFn,
    transform = (data) => data,
  } = config;

  const setProgress = useFileUploadStore((state) => state.setProgress);
  const alert = useAlert();
  const qc = useQueryClient();
  const [openSideMenu, setOpenSideMenu] = React.useState(false);

  const [editId, setEditId] = useState(null);
  // getSetting
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + key, () => getAllFn(endpoint, { page: 1 }));

  // create
  const onCreate = useMutation(
    (data) => {
      return !editId
        ? postFn(endpoint, transform(data), setProgress)
        : putFn(endpoint, editId, transform(data), setProgress);
    },
    {
      onSuccess: () => {
        setOpenSideMenu(false);
        qc.invalidateQueries('get' + key);
        alert.success(!editId ? 'created' : 'Updated');
      },
      onError: (data) => {
        alert.error('Failed');
      },
    }
  );

  // Delete
  const onDelete = useMutation((data) => deleteFn(endpoint, data), {
    onSuccess: () => {
      qc.invalidateQueries('get' + key);
      alert('Deleted');
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });

  const editClickCB = (id) => {
    setOpenSideMenu(true);
    // TODO: Very Crucial
    setEditId(id);
  };

  const onDeleteClick = (id) => {
    if (window.confirm('Do you want to delete this ? ')) {
      onDelete.mutate({ id: id });
    }
    // setOpenSideMenu(true)
  };

  useEffect(
    (_) => {
      if (!openSideMenu) {
        setEditId(null);
      }
    },
    [openSideMenu]
  );
  // return "hi"
  return (
    <Stack spacing={2} m={2} divider={<AppDivider />}>
      <Stack direction="row" spacing={3}>
        <SearchInput sx={{ flex: 1 }} />
        <AppButton
          variant="contained"
          onClick={() => {
            console.log('open', openSideMenu);
            setOpenSideMenu(true);
          }}
        >
          {texts?.drawerTitle}
        </AppButton>
        {openSideMenu && (
          <SettingDrawer
            open={openSideMenu}
            callback={setOpenSideMenu}
            title={
              editId
                ? texts?.drawerTitle?.replace('Add', 'Update')
                : texts?.drawerTitle
            }
          >
            <AppForm
              form={config.form}
              edit={
                editId ? { ...response.data.find((e) => e.id == editId) } : null
              }
              submitData={(data) => onCreate.mutate({ ...data })}
              validationSchema={validation}
              cancelDrawer={() => setOpenSideMenu(false)}
            />
          </SettingDrawer>
        )}
      </Stack>
      <Stack sx={{ rowGap: 1 }}>
        {isLoading
          ? 'Loading'
          : response?.data?.map((e, index) => (
              <EditableList
                key={index}
                label={extractFromJSON(e, `**.${texts.key}`)}
                cb={{
                  Edit: () => editClickCB(e.id),
                  Delete: () => onDeleteClick(e.id),
                }}
              />
            ))}
      </Stack>
    </Stack>
  );
};

export default ListWithSidebarLayout;
