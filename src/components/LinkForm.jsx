import React, { useState } from 'react';
import useCreateLink from '../hooks/useCreateLink';

const INIT_STATE = {
  name: '',
  description: '',
  url: '',
};

const LinkForm = () => {
  const [formData, setFormData] = useState(INIT_STATE);
  const { mutate: createLink } = useCreateLink();

  const { name, description, url } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createLink({ name, description, url });
    setFormData(INIT_STATE);
  };

  return (
    <div className="card">
      <div className="card-header">Add Link</div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={onChange}
              name="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              value={url}
              onChange={onChange}
              name="url"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              value={description}
              onChange={onChange}
              name="description"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LinkForm;
