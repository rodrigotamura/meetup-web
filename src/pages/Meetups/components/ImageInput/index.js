import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import { MdAddAPhoto } from 'react-icons/md';
import api from '~/services/api';
import { Container, Label } from './styles';

export default function LabelFile({ name, fileData }) {
  const ref = useRef();

  // fieldName retorna banner_id
  const { fieldName, registerField, error } = useField(name);
  const [file, setFile] = useState(fileData && fileData.banner.id);
  const [preview, setPreview] = useState(fileData && fileData.banner.url);

  async function handleChangefile(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { url, path } = response.data;
    console.tron.log(response.data);

    setFile(url);
    setPreview(url);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'dataset.file',
    });
  }, [file, registerField, fieldName]);

  return (
    <Container>
      {error && <span>Please, insert an image</span>}
      <Label htmlFor="file" background={preview}>
        {!preview && <MdAddAPhoto size={50} />}
        <input
          name={fieldName}
          onChange={handleChangefile}
          type="file"
          accept="image/*"
          id="file"
          data-file={file}
          ref={ref}
        />
      </Label>
    </Container>
  );
}
