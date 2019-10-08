import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import { MdAddAPhoto } from 'react-icons/md';
import api from '~/services/api';
import { Container, Label } from './styles';

export default function LabelFile({ name, fileData }) {
  const ref = useRef();
  // fieldName retorna banner_id
  const { defaultValue, fieldName, registerField } = useField('banner');
  const { error } = useField(name);

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue.url);
      setFile(defaultValue.id);
    }
  }, [defaultValue]);

  async function handleChangefile(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  useEffect(() => {
    registerField({
      name,
      ref: ref.current,
      path: 'dataset.file',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, [ref.current]);

  return (
    <Container>
      {error && <span>Please, insert an image</span>}
      <Label htmlFor="banner" background={preview}>
        {!preview && <MdAddAPhoto size={50} />}
        <input
          name={fieldName}
          onChange={handleChangefile}
          type="file"
          accept="image/*"
          id="banner"
          data-file={file}
          ref={ref}
        />
      </Label>
    </Container>
  );
}
