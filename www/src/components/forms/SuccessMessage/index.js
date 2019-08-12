import React from 'react';
import { FormularySuccess, SuccessContent, SuccessTitle, SuccessDescription, SuccessBtn } from './style';

function SuccessMessage({ isOpen, toggle }) {
  return (
    <FormularySuccess className={`formulary-success flex ${isOpen === 1 && 'active'}`}>
      <SuccessContent>
        <figure>
          <img src="/static/iconos/icon-success.svg" width="80" alt="Success" />
        </figure>
        <SuccessTitle>Thank you for submiting!</SuccessTitle>
        <SuccessDescription>
          <p>We are reviewing your information.</p>
          <p>Meanwhile you can make a reservation to have a call.</p>
        </SuccessDescription>
        <SuccessBtn>
          <button className="btn white" onClick={toggle}>
            <span>Book call</span>
          </button>
        </SuccessBtn>
      </SuccessContent>
    </FormularySuccess>
  );
}

export default SuccessMessage;
