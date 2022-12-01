import AppForm from 'components/fields/AppForm';
import SelectDropdown from 'components/fields/SelectDropdown';
import TextInput from 'components/fields/TextInput';
import SettingPageLayout from 'components/settings/SettingPageLayout';
import { useMutation, useQueryClient } from 'react-query';
import {
  createSetting,
  deleteSetting,
  getSetting,
  updateSetting,
} from 'requests/settings';
import * as Yup from 'yup';

const company = [
  {
    element: TextInput,
    attr: {
      label: 'Organization Name',
      name: 'company.companyName',
    },
    size: 12,
  },
  {
    element: TextInput,
    attr: {
      label: 'Start Year',
      name: 'company.startYear',
    },
    size: 4,
  },
  {
    element: TextInput,
    attr: {
      label: 'Country',
      name: 'company.country',
    },
    size: 4,
  },
  {
    element: SelectDropdown,
    attr: {
      label: 'Language',
      name: 'company.language',
      options: [
        { text: 'English', value: 'en' },
        { text: 'Arabic', value: 'ar' },
      ],
    },
    size: 4,
  },
];

const validation_company = Yup.object()
  .shape({
    company: Yup.object().shape({
      companyName: Yup.string().required(' name required.'),
      industry: Yup.string().required('type required.'),
      description: Yup.string().required('description required.'),
      language: Yup.string().required('language required.'),
    }),
  })
  .required();

const companyForm = {
  key: 'company',
  form: [
    {
      header: 'Organisation Details',
      fields: company,
    },
    {
      header: 'Organisation Details',
      fields: company,
    },
  ],
  endpoint: 'settings/company',
  texts: {
    title: 'Organization',
    key: 'companyName',
    breadcrumbText: 'Organization',
    drawerTitle: 'Add Organization',
    mainTitle: 'List of Organization',
    mainDescription: 'It is short description for Organization',
    sideTitle: 'List of Organization',
    sideDescription:
      'This is long long long for Organization saldkf skflas asfkjdsadklfsadf salkdfklajsfkjlsad lorem description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quidem neque exercitationem aperiam laboriosam at, tempore ipsam natus alias repellat dolorum. Totam commodi eius dolorem laudantium dolores explicabo ex id.',
  },
  validation: validation_company,
  getAllFn: getSetting,
  postFn: createSetting,
  putFn: updateSetting,
  deleteFn: deleteSetting,
};

const Organization = () => {
  const qc = useQueryClient();

  // const {
  //   isLoading,
  //   data: response,
  //   error,
  // } = useQuery('get' + companyForm.key, () => companyForm.getAllFn());

  // create
  const onCreate = useMutation((data) => companyForm.postFn(data), {
    onSuccess: () => {
      qc.invalidateQueries('get' + key);
      alert(`${endpoint} created`);
      setOpenSideMenu(false);
    },
    onError: (data) => {
      alert('Failed');
    },
  });

  return (
    <>
      <SettingPageLayout
        texts={{
          breadcrumbText: 'Organization',
          mainTitle: 'Organization Setting',
          mainDescription:
            'It is a long established fact that a reader will be distracted',
          sideTitle: 'Organization Setting',
          sideDescription:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        }}
      >
        <AppForm
          form={companyForm.form}
          submitData={(data) => onCreate.mutate({ ...data })}
          validationSchema={companyForm.validation}
        />

        {/* <Stack spacing={3}>
          <Typography variant="h3_bold_secondary" component="h3">
            Organization Details
          </Typography>
          <TextInput
            label="Organization Name"
            register={register}
            name="companyName"
          />
          <TextInput label="Industry" register={register} name="industry" />

          <AppDatePicker
            label="Established"
            register={register}
            name="established"
          />
          <SettingDrawer />

          <AppButton label={'Save'} variant="contained" />
        </Stack> */}
      </SettingPageLayout>
    </>
  );
};

export default Organization;
