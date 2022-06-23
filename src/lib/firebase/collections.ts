import { DocumentData, collection, CollectionReference } from 'firebase/firestore/lite';

// types
import { Employee } from '~/types/employee';
import { Employer } from '~/types/employer';

import { db } from './store';

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const employersCol = createCollection<Employer>('employers');

export const employeesCol = createCollection<Employee>('employees');
