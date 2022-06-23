// types
import { Employee } from '~/types/employee';

export interface EmployeeSliceState {
  employees: Employee[];
  loadings: ('registerEmployee' | 'fetchEmployees')[];
}
