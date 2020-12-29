import React from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';

const App = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Link O' Link</h1>
      <LinkForm />
      <LinkList />
    </div>
  );
};

export default App;
