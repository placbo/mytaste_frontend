import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';

import styled from '@emotion/styled';
import AddAPhoto from '@mui/icons-material/AddAPhoto';
import { CircularProgress } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { IMAGE_UPLOAD_URL, THUMBNAIL_URL } from '../constants';
import axios from 'axios';

const StyledAddImageWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed lightgray;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const maxFileSizeMb = 6 * 1024 * 1024;

const uploadImage = async (
  file: File,
  itemId: string,
  setError?: Dispatch<SetStateAction<Error | undefined>>,
  setUploading?: Dispatch<SetStateAction<boolean>>
): Promise<string | undefined> => {
  if (setUploading) setUploading(true);
  try {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('itemid', itemId);
    const token = localStorage.getItem('token');
    const result = await axios.post(`${IMAGE_UPLOAD_URL}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data.filename;
  } catch (error) {
    if (setError) setError(error as Error);
  } finally {
    if (setUploading) setUploading(false);
  }
};

interface Props {
  itemId: string | undefined;
  setError: Dispatch<SetStateAction<Error | undefined>>;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  imageFileName: string | undefined;
  setImageFileName: Dispatch<SetStateAction<string | undefined>>;
}

export const AddImageComponent: FC<Props> = ({
  itemId,
  setError,
  setSuccess,
  imageFileName,
  setImageFileName,
}) => {
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const handleFileUpload = async (file: File | null) => {
    setSuccess(false);
    if (itemId && file && file?.size < maxFileSizeMb) {
      const generatedFileName = await uploadImage(file, itemId, setError, setIsUploadingImage);
      setSuccess(true);
      if (generatedFileName) {
        setImageFileName(generatedFileName);
      }
    } else {
      setError(new Error('For stor fil'));
    }
  };

  return (
    <StyledAddImageWrapper>
      {isUploadingImage ? (
        <CircularProgress size={'1rem'} />
      ) : imageFileName ? (
        <StyledImage
          alt="Item"
          src={`${THUMBNAIL_URL}${imageFileName}`}
          //onError={(event: any) => (event.target.src = personPlaceholderImage)}
        />
      ) : (
        <>
          <IconButton
            disabled={!itemId}
            size="large"
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              id="file-upload"
              hidden
              accept="image/png, image/gif, image/jpeg"
              type="file"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleFileUpload(event.target.files && event.target.files[0]);
              }}
            />
            <AddAPhoto fontSize="large" />
          </IconButton>
        </>
      )}
    </StyledAddImageWrapper>
  );
};
