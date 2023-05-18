import React from 'react';

const EmailListItem = ({ email }) => {
  return (
    <div>
      <h3>{email.subject}</h3>
      <p>De: {email.sender}</p>
      <p>{email.body}</p>
      {/* Agrega el código para mostrar los detalles del correo electrónico */}
    </div>
  );
};

export default EmailListItem;
