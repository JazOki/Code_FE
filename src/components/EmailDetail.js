import React from 'react';
import { connect } from 'react-redux';
import { markAsUnread, markAsSpam, deleteEmail } from '../store/actions/emailActions';

const EmailDetail = ({ email, markAsUnread, markAsSpam, deleteEmail }) => {
  const handleMarkAsUnread = () => {
    // Llama a la acción markAsUnread para marcar el correo como no leído
    markAsUnread(email.id);
  };

  const handleMarkAsSpam = () => {
    // Llama a la acción markAsSpam para marcar el correo como correo no deseado
    markAsSpam(email.id);
  };

  const handleDeleteEmail = () => {
    // Llama a la acción deleteEmail para eliminar el correo
    deleteEmail(email.id);
  };

  if (!email) {
    return <div>No se ha seleccionado ningún correo electrónico.</div>;
  }

  return (
    <div>
      <h2>Detalle del correo electrónico</h2>
      <button onClick={handleMarkAsUnread}>Marcar como no leído</button>
      <button onClick={handleMarkAsSpam}>Marcar como correo no deseado</button>
      <button onClick={handleDeleteEmail}>Eliminar</button>
      <h3>{email.subject}</h3>
      <p>De: {email.sender}</p>
      <p>{email.body}</p>
      {/* Muestra más detalles del correo electrónico, como adjuntos, etc. */}
    </div>
  );
};

const mapStateToProps = (state) => {
  // Obtén el correo electrónico seleccionado del estado
  // Puedes usar el estado para encontrar el correo electrónico correspondiente utilizando su ID, por ejemplo
  return {
    email: null // Reemplaza null por el correo electrónico seleccionado
  };
};

const mapDispatchToProps = {
  markAsUnread,
  markAsSpam,
  deleteEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailDetail);
