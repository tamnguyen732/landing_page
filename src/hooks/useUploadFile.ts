import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { getDownloadURL, ref, uploadString } from 'firebase/storage';

import { storage } from '~/lib/firebase';
import { deletePhoto } from '~/services';

const useUploadFile = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const prevPhotoURL = useRef<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, url: string) => {
    const file = e.target.files?.[0];

    if (file == null) return;

    if (prevPhotoURL.current != null) deletePhoto(prevPhotoURL.current);

    setFileName(file.name);

    const reader = new FileReader();

    const photoRef = ref(storage, url);

    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      await uploadString(photoRef, reader.result as string, 'data_url');

      const downloadURL = await getDownloadURL(photoRef);

      prevPhotoURL.current = downloadURL;

      setSelectedFile(downloadURL);
    };
  };

  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      if (prevPhotoURL.current != null) deletePhoto(prevPhotoURL.current);
    });
  }, []);

  return [selectedFile, handleInputChange, fileName] as const;
};

export default useUploadFile;
