import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { id, name, email, ...rest } = payload.data;

    const profile = {
      id,
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Profile has updated successfully');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error(
      `Error: profile updating failure, check your data. (server response: ${error.response.data.error})`
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
