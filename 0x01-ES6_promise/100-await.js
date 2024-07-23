import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoResult, createUserResult]) => ({
      photo: uploadPhotoResult,
      user: createUserResult,
    }))
    .catch(() => ({
      photo: null,
      user: null,
    }));
}
