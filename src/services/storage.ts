import { deleteObject, ref } from 'firebase/storage';

import { storage } from '~/lib/firebase';

export const deletePhoto = (photoUrl: string) => {
  const photoRef = ref(storage, photoUrl);

  deleteObject(photoRef);
};
