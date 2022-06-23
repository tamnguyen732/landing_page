// types
import { Employer } from '~/types/employer';

export interface EmployerSliceState {
  employers: Employer[];
  loadings: ('fetchEmployers' | 'registerEmployer')[];
}
