import EditableList from '@/components/settings/EditableList';
import SmartSideBarForm from '@/components/smartFormComponents/SmartSidebarForm';
import { Stack } from '@mui/system';
import AppFileUpload from 'components/fields/AppFileUpload';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { extractFromJSON, transformToFormData } from 'Utils';

const plan = {
  sideBarTitle: 'Add Company Document',
  section: {
    fields: [
      {
        label: 'Document Name',
        // isRequired: true,
        type: 'Text',
        id: 'document.name',
        gridSizes: { xs: 12, sm: 6, md: 6, lg: 6 },
        config: {
          placeholder: 'Document Name',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
      {
        label: 'File',
        // isRequired: true,
        type: 'DocumentUpload',
        id: 'file',
        gridSizes: { xs: 12, sm: 12, md: 12, lg: 12 },
        config: {
          placeholder: 'File',
        },
        validations: [
          {
            type: 'required',
          },
        ],
      },
    ],
  },
  postFn: createSetting,
  putFn: updateSetting,
  endpoint: 'settings/companyDocument',
  key: 'company-doc',
  texts: {
    key: 'document.name',
    breadcrumbText: 'Comapny Documents',
    drawerTitle: 'Add Document',
    mainTitle: 'List of Documents',
    mainDescription: 'This is short description for division',
    sideTitle: 'Document',
    sideDescription:
      'this is long long long for division saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  transform: (data) => {
    return transformToFormData(data);
  },
};

export default function Page() {
  const qc = useQueryClient();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + plan.key, () => getSetting(plan.endpoint, { page: 1 }));

  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [editData, setEditData] = useState(null);
  // Delete
  const onDelete = useMutation((data) => deleteSetting(plan.endpoint, data), {
    onSuccess: () => {
      qc.invalidateQueries('get' + plan.key);
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
    setEditData(id);
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
        setEditData(null);
      }
    },
    [openSideMenu]
  );

  return (
    <SettingPageLayout texts={plan.texts}>
      {/* <SmartFromToDatePicker /> */}
      <SmartSideBarForm
        plan={plan}
        openSideMenu={openSideMenu}
        setOpenSideMenu={setOpenSideMenu}
        editData={editData}
      />
      <Stack sx={{ rowGap: 1 }}>
        {isLoading
          ? 'Loading'
          : response?.data?.map((e, index) => (
              <EditableList
                key={index}
                label={extractFromJSON(e, `**.document.name`)}
                cb={{
                  Edit: () => editClickCB(e),
                  Delete: () => onDeleteClick(e.id),
                }}
              />
            ))}
      </Stack>
    </SettingPageLayout>
  );
}
