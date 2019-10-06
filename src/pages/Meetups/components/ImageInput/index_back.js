import React, { useState, useRef, useEffect } from 'react';
import { useField, Input } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import api from '~/services/api';

import { Container, Content } from './styles';

export default function ImageInput() {
  const { defaultValue, registerField } = useField('banner'); // this 'avatar' is comming from Redux (payload>user)
  const [imageId, setImageId] = useState('');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      // this code snippet will work only with React 16.8.x
      // React 16.9 will generate will work, but will generate a lot of errors.
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData(); // converting for Multer acception

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <Input name="image" type="text" />
      <Content>
        <label htmlFor="banner" preview={preview}>
          {!preview && (
            <>
              <MdCameraAlt size={60} color="#FFF" />
              <p>Select your image for banner</p>
            </>
          )}

          <input
            type="file"
            id="banner"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </label>
      </Content>
    </Container>
  );
}
