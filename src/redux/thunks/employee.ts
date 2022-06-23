import { addDoc, getDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore/lite';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// types
import { Employee } from '~/types/employee';

import { ANCHORS } from '~/constants';
import { modalActions, MODAL_TYPES } from '../slices/modalSlice';
import { employeesCol } from '~/lib/firebase';
import { scrollTo } from '~/helpers';

export const fetchEmployeesThunk = createAsyncThunk(
  'employee/fetchEmployees',
  async (_, { rejectWithValue }) => {
    try {
      const meQuery = query(employeesCol, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(meQuery);

      return querySnapshot.docs.map((snapShot) => ({ ...snapShot.data(), id: snapShot.id }));
    } catch {
      rejectWithValue(null);
    }
  },
);

export const registerEmployeeThunk = createAsyncThunk(
  'employee/registerEmployee',
  async (data: Employee, { dispatch, rejectWithValue }) => {
    try {
      const docRef = await addDoc(employeesCol, { ...data, createdAt: serverTimestamp() });

      const docSnap = await getDoc(docRef);

      const docData = docSnap.data();

      if (docData == null) return null;

      toast.success('Register successfully!', {
        duration: 3000,
        position: 'top-center',
      });

      dispatch(modalActions.hideModal(MODAL_TYPES.REGISTER_EMPLOYEE));

      scrollTo(ANCHORS.employeeList);

      return { ...docData, id: docRef.id };
    } catch {
      rejectWithValue(null);
    }
  },
);
