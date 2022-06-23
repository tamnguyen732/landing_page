import * as yup from 'yup';

export const registerEmployerSchema = yup
  .object({
    contactEmail: yup.string().required('Email is required').email('Invalid email'),
    contactName: yup.string().required('Contact name is required'),
    companyName: yup.string().required('Company name is required'),
    description: yup.string().required('Description is required'),
    role: yup.string().required('Role is required'),
  })
  .required();

export const registerEmployeeSchema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    position: yup.string().required('Position is required'),
  })
  .required();

export const registerEmployeeSchemaWithExp = registerEmployeeSchema.concat(
  yup.object({
    experience: yup
      .number()
      .positive('Number must not be negative')
      .typeError('You must specify a number')
      .max(99, 'Should be 2 chars maximum')
      .required('Years of experience is required'),
  }),
);
