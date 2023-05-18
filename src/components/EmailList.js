import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setEmails } from '../store/actions/emailActions';

const EmailList = ({ emails, setEmails }) => {
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('/api/mail-data');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, []);

  const handleClick = (emailId) => {
    // Llama a la acción markAsRead para marcar el correo como leído
    markAsRead(emailId);
  };

  return (
    <div>
      <h2>Lista de correos electrónicos</h2>
      <ul>
        {emails.map((email) => (
          <li
            key={email.id}
            onClick={() => handleClick(email.id)}
            className={email.read ? 'read' : 'unread'}
          >
            {email.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    emails: state.emails
  };
};

const mapDispatchToProps = {
  setEmails
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);
