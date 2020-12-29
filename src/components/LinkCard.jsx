import React from 'react';
import useArchiveLink from '../hooks/useArchiveLink';
import useDeleteLink from '../hooks/useDeleteLink';

const LinkCard = ({ link }) => {
  const { name, description, url, _id } = link;

  const { mutate: archiveLink } = useArchiveLink();
  const { mutate: deleteLink } = useDeleteLink();
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <a href={url}>{url}</a>
        <p>{description}</p>
      </div>

      <div className="card-footer">
        <button
          onClick={() => archiveLink({ ...link, id: _id })}
          className="btn btn-warning mr-2"
        >
          Archive
        </button>
        <button onClick={() => deleteLink(_id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
