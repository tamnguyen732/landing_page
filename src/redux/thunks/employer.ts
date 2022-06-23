import { addDoc, getDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore/lite';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// types
import { Employer } from '~/types/employer';

import { ANCHORS } from '~/constants';
import { employersCol } from '~/lib/firebase';
import { modalActions, MODAL_TYPES } from '../slices/modalSlice';
import { scrollTo } from '~/helpers';

export const fetchEmployersThunk = createAsyncThunk(
  'employer/fetchEmployers',
  async (_, { rejectWithValue }) => {
    try {
      const meQuery = query(employersCol, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(meQuery);

      return querySnapshot.docs.map((snapShot) => ({ ...snapShot.data(), id: snapShot.id }));
    } catch {
      rejectWithValue(null);
    }
  },
);

export const registerEmployerThunk = createAsyncThunk(
  'employer/registerEmployer',
  async (data: Employer, { dispatch, rejectWithValue }) => {
    try {
      const docRef = await addDoc(employersCol, { ...data, createdAt: serverTimestamp() });

      const docSnap = await getDoc(docRef);

      const docData = docSnap.data();

      if (docData == null) return null;

      toast.success('Register successfully!', {
        duration: 3000,
        position: 'top-center',
      });

      dispatch(modalActions.hideModal(MODAL_TYPES.REGISTER_EMPLOYER));

      scrollTo(ANCHORS.employerList);

      return { ...docData, id: docRef.id };
    } catch {
      rejectWithValue(null);
    }
  },
);
