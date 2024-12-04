'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './button';
//import CompanyFormModal from './company-form-modal';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        show={show}
        onClose={() => setShow(false)}
        onSubmit={console.log}
      />
    </>
  );
};

export default AddCompanyButton;
