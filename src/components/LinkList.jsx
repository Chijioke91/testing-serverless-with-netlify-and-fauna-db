import React from 'react';
import useFetchLinks from '../hooks/useFetchLinks';
import LinkCard from './LinkCard';

const LinkList = () => {
  const { data: links, status } = useFetchLinks();

  return (
    <div>
      <h2 className="my-4">Links</h2>
      {status === 'success' &&
        links
          .filter((lk) => !lk.archived)
          .map((link, idx) => <LinkCard key={idx} link={link} />)}
      <h2 className="my-4">Archived</h2>
      {status === 'success' &&
        links
          .filter((lk) => lk.archived)
          .map((link, idx) => <LinkCard key={idx} link={link} />)}
    </div>
  );
};

export default LinkList;
