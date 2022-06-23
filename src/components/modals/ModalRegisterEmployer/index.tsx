import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from 'nanoid';

// types
import { Employer } from '~/types/employer';
import { FormInput } from '~/types/shared';

import { MODAL_TYPES } from '~/redux/slices/modalSlice';
import { registerEmployerSchema } from '~/helpers';
import { useEmployerDispatch } from '~/redux/dispatches';
import { bindClass } from '~/lib/classNames';
import { useUploadFile } from '~/hooks';
import { useEmployerSelector } from '~/redux/selectors';
import { deletePhoto } from '~/services';

import { InputField, RegisterForm, FileUpload, Select } from '~/components';
import Wrapper from '../Wrapper';

import styles from './ModalRegisterEmployer.module.scss';
import industries from '~/assets/data/industries.json';

const cx = bindClass(styles);

type FormInputs = FormInput<Employer>[];

const formInputs: FormInputs = [
  { name: 'contactEmail', placeholder: 'Email' },
  { name: 'contactName', placeholder: 'Contact Name' },
  { name: 'companyName', placeholder: 'Company Name' },
  { name: 'description', placeholder: 'Description' },
  { name: 'role', placeholder: 'What roles are you looking for?' },
];

const ModalRegisterEmployer = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { loadings: employerLoadings } = useEmployerSelector();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employer>({
    resolver: yupResolver(registerEmployerSchema),
  });

  const { registerEmployerDispatch } = useEmployerDispatch();
  const [companyPhoto, changeCompanyPhoto, companyPhotoFileName] = useUploadFile();

  const onSubmit = (data: Employer) => {
    if (companyPhoto == null || selectedOption == null) return;

    registerEmployerDispatch({ ...data, companyPhoto });
  };

  const renderInputs = (inputs: FormInputs) =>
    inputs.map((input) => (
      <InputField
        key={input.name}
        errors={errors}
        register={register(input.name)}
        placeholder={input.placeholder}
      />
    ));

  const handleCloseModal = () => {
    if (companyPhoto != null) deletePhoto(companyPhoto);
  };

  const fields = (
    <>
      {renderInputs(formInputs.slice(0, 3))}
      <Select
        value='Industry'
        onChange={setSelectedOption}
        options={industries.map((industry) => ({ label: industry, value: industry }))}
      />
      {renderInputs(formInputs.slice(3, formInputs.length))}
      <FileUpload
        accept='image/*'
        onChange={(e) => changeCompanyPhoto(e, `companies/${nanoid(16)}/image`)}
        className={cx('upload', {
          selected: companyPhotoFileName != null,
        })}
      >
        {companyPhotoFileName != null ? companyPhotoFileName : 'Upload your Company Photo'}
      </FileUpload>
    </>
  );

  return (
    <Wrapper
      onClose={handleCloseModal}
      canClose={!employerLoadings.includes('registerEmployer')}
      modalType={MODAL_TYPES.REGISTER_EMPLOYER}
    >
      <RegisterForm title='Register as Employer' onSubmit={handleSubmit(onSubmit)}>
        {fields}
      </RegisterForm>
    </Wrapper>
  );
};

export default ModalRegisterEmployer;
