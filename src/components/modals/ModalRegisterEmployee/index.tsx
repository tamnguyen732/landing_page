import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { nanoid } from 'nanoid';

// types
import { Employee } from '~/types/employee';
import { FormInput } from '~/types/shared';

import { MODAL_TYPES } from '~/redux/slices/modalSlice';
import { registerEmployeeSchema, registerEmployeeSchemaWithExp } from '~/helpers';
import { useUploadFile } from '~/hooks';
import { useEmployeeDispatch } from '~/redux/dispatches';
import { bindClass } from '~/lib/classNames';
import { useEmployeeSelector } from '~/redux/selectors';
import { deletePhoto } from '~/services';

import { InputField, RegisterForm, Select, FileUpload } from '~/components';
import Wrapper from '../Wrapper';

import styles from './ModalRegisterEmployee.module.scss';

const cx = bindClass(styles);

type FormInputs = FormInput<Employee>[];

type Occupation = Employee['occupation'];

const formInputs: FormInputs = [
  { name: 'firstName', placeholder: 'First Name' },
  { name: 'lastName', placeholder: 'Last Name' },
  { name: 'position', placeholder: 'Position' },
];

const ModalRegisterEmployee = () => {
  const [selectedOption, setSelectedOption] = useState<Occupation | null>(null);
  const [formSchema, setFormSchema] = useState(registerEmployeeSchema);

  const { loadings: employeeLoadings } = useEmployeeSelector();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Employee>({
    resolver: yupResolver(formSchema),
  });

  const [avatar, changeAvatar, fileNameAvatar] = useUploadFile();
  const [resume, changeResume, fileNameResume] = useUploadFile();

  const { registerEmployeeDispatch } = useEmployeeDispatch();

  const onSubmit = (data: Employee) => {
    if (selectedOption == null || avatar == null || resume == null) return;

    registerEmployeeDispatch({
      ...data,
      resume,
      avatar,
      occupation: selectedOption,
      experience: data.experience ?? 0,
    });
  };

  const handleCloseModal = () => {
    if (avatar != null) deletePhoto(avatar);

    if (resume != null) deletePhoto(resume);
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

  const fields = (
    <>
      {renderInputs(formInputs)}

      <Select<Occupation>
        value={selectedOption ?? ('Occupation' as any)}
        options={[
          { label: 'Student', value: 'student' },
          { label: 'Graduate', value: 'graduate' },
          { label: 'Working', value: 'working' },
        ]}
        onChange={(value) => {
          setSelectedOption(value);

          if (value === 'working') setFormSchema(registerEmployeeSchemaWithExp);
          else setFormSchema(registerEmployeeSchema);
        }}
      />

      {selectedOption === 'working' &&
        renderInputs([{ name: 'experience', placeholder: 'Years of experience' }])}

      <FileUpload
        accept='image/*'
        onChange={(e) => changeAvatar(e, `employees/${nanoid(16)}/avatar`)}
        className={cx('upload', {
          selected: fileNameAvatar != null,
        })}
      >
        {fileNameAvatar != null ? fileNameAvatar : 'Upload your Avatar'}
      </FileUpload>

      <FileUpload
        accept='application/pdf'
        onChange={(e) => changeResume(e, `employees/${nanoid(16)}/resume`)}
        className={cx('upload', {
          selected: fileNameResume != null,
        })}
      >
        {fileNameResume != null ? fileNameResume : 'Upload your Resume'}
      </FileUpload>
    </>
  );

  return (
    <Wrapper
      onClose={handleCloseModal}
      canClose={!employeeLoadings.includes('registerEmployee')}
      modalType={MODAL_TYPES.REGISTER_EMPLOYEE}
    >
      <RegisterForm title='Register as Employee' onSubmit={handleSubmit(onSubmit)}>
        {fields}
      </RegisterForm>
    </Wrapper>
  );
};

export default ModalRegisterEmployee;
