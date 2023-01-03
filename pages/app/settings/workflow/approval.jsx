import * as React from 'react';
import { Divider, Stack, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextInput from 'components/fields/TextInput';
import ListWithSidebarLayout from 'components/settings/ListWithSidebarLayout';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import AppSequenceDropdown from 'components/settings/workflow/AppSequenceDropdown';
import PropTypes from 'prop-types';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAlert } from 'react-alert';
import AppForm from 'components/fields/AppForm';
import AppDropdown from 'components/fields/AppDropdown';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      style={{ marginTop: index }}
    >
      {value === index && (
        <Stack direction="column" spacing={2}>
          {children}
        </Stack>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const workflowHierarchy = [
  {
    element: TextInput,
    attr: {
      label: 'Enter Workflow Hierarchy Type Name',
      name: 'workflowHierarchy.name',
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Workflow Hierarchy Type Name is Required'],
        },
      ],
    },
    xs: 12,
  },
  {
    element: AppSequenceDropdown,
    attr: {
      headLabel: 'Approver sequence in role',
      label: 'Select the Approvers in order of Hierarchy',
      name: 'workflowHierarchy.order',
    },

    xs: 12,
  },
];
const TransferApprovals = [
  {
    element: AppDropdown,
    attr: {
      label: 'Select Approval Hierarchy Type',
      name: 'workflowSetting.trasferApprovalHierarchy',
      options: [
        { text: 'hierarchy 1', value: 'h1' },
        { text: 'hierarchy 2', value: 'h2' },
        { text: 'hierarchy 3', value: 'h3' },
      ],
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Workflow Hierarchy Type is Required'],
        },
      ],
    },
    xs: 6,
  },
];
const TerminationApprovals = [
  {
    element: AppDropdown,
    attr: {
      label: 'Select Approval Hierarchy Type',
      name: 'workflowSetting.terminationApprovalHierarchy',
      options: [
        { text: 'hierarchy 1', value: 'h1' },
        { text: 'hierarchy 2', value: 'h2' },
        { text: 'hierarchy 3', value: 'h3' },
      ],
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Workflow Hierarchy Type is Required'],
        },
      ],
    },
    xs: 6,
  },
];
const LeaveApprovals = [
  {
    element: AppDropdown,
    attr: {
      label: 'Select Approval Hierarchy Type',
      name: 'workflowSetting.leaveApprovalHierarchy',
      options: [
        { text: 'hierarchy 1', value: 'h1' },
        { text: 'hierarchy 2', value: 'h2' },
        { text: 'hierarchy 3', value: 'h3' },
      ],
    },
    validation: {
      validationType: 'string',
      validations: [
        {
          type: 'required',
          params: ['Workflow Hierarchy Type is Required'],
        },
      ],
    },
    xs: 6,
  },
];

const workflowHierarchyForm = {
  key: 'workflowHierarchy',
  form: [
    {
      header: '',
      fields: workflowHierarchy,
    },
  ],
  endpoint: 'settings/workflowHierarchy',
  texts: {
    title: 'Workflow',
    key: 'workflowHierarchyName',
    breadcrumbText: 'Workflow',
    drawerTitle: 'Add Workflow',
    mainTitle: 'List of Workflows',
    mainDescription: 'It is short description for workflowHierarchy',
    sideTitle: 'List of Workflows',
    sideDescription:
      'This is long long long for workflowHierarchy saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};
const workflowApprovalsForm = {
  key: 'workflowApprovals',
  form: [
    {
      header: 'Transfer Approvals',
      fields: TransferApprovals,
    },
    {
      header: 'Termination Approvals',
      fields: TerminationApprovals,
    },
    {
      header: 'Leave Approvals',
      fields: LeaveApprovals,
    },
  ],
};

export default function Pages(props) {
  const qc = useQueryClient();
  const alert = useAlert();
  const {
    isLoading,
    data: response,
    error,
  } = useQuery('get' + workflowHierarchyForm.key, () =>
    workflowHierarchyForm.getAllFn(workflowHierarchyForm.endpoint)
  );

  // create
  const onCreate = useMutation(
    (data) =>
      response?.data
        ? workflowHierarchyForm.putFn(
            workflowHierarchyForm.endpoint,
            response.data.id,
            data
          )
        : workflowHierarchyForm.postFn(workflowHierarchyForm.endpoint, data),
    {
      onSuccess: () => {
        qc.invalidateQueries('get' + workflowHierarchyForm.key);
        alert.success(response?.data ? `Updated` : `Company Created`);
      },
      onError: (data) => {
        alert.error('Failed');
      },
    }
  );
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <SettingPageLayout
      texts={{
        title: 'Workflow Approval Setting',
        key: 'workflowApproval',
        breadcrumbText: 'Workflow Approval Setting',
        drawerTitle: 'Add Workflow Heirarchy Type',
        mainTitle: 'Workflow Approval Setting',
        mainDescription: 'It is short description for leavePolicy',
        sideTitle: 'Workflow Approval Setting',
        sideDescription:
          "It is a long established fact thats a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      }}
    >
      <Stack
        sx={{ m: 2 }}
        alignItems="start"
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Tabs
            sx={{
              '& .MuiButtonBase-root': {
                padding: 2,
              },
              '& .MuiTabs-indicator': {
                height: '3px',
                borderRadius: '2px',
              },
            }}
            indicatorColor="primary"
            value={value}
            onChange={handleChange}
          >
            <Tab
              sx={{
                '&.Mui-selected': { fontWeight: 600, color: '#333333' },
              }}
              label={
                <Typography
                  variant={
                    0 === value ? 'body_medium_secondary' : 'body_medium_muted'
                  }
                  component="h3"
                >
                  Workflow Hierarchy Type
                </Typography>
              }
            />
            <Tab
              sx={{
                '&.Mui-selected': { fontWeight: 600, color: '#333333' },
              }}
              label={
                <Typography
                  variant={
                    1 === value ? 'body_medium_secondary' : 'body_medium_muted'
                  }
                  component="h3"
                >
                  Workflow Setting
                </Typography>
              }
            />
          </Tabs>
        </Stack>
        {/* <Divider orientation="horizontal" /> */}
        <Stack
          spacing={2}
          sx={{
            width: '100%',
          }}
        >
          {/* {tabs.map((tab, i) => ( */}
          <TabPanel value={value} index={0}>
            <ListWithSidebarLayout config={workflowHierarchyForm} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AppForm
              form={workflowApprovalsForm.form}
              submitData={(data) => onCreate.mutate({ ...data })}
              validationSchema={workflowHierarchyForm.validation}
              edit={response?.data}
              cancelDrawer={null}
            />
          </TabPanel>
          {/* ))} */}
        </Stack>
      </Stack>
    </SettingPageLayout>
  );
}
