export const setEmails = (emails) => {
  return {
    type: 'SET_EMAILS',
    payload: emails,
  };
};

export const markAsRead = (emailId) => {
    return {
      type: 'MARK_AS_READ',
      payload: emailId
    };
  };
  
  export const markAsUnread = (emailId) => {
    return {
      type: 'MARK_AS_UNREAD',
      payload: emailId
    };
  };
  
  export const markAsSpam = (emailId) => {
    return {
      type: 'MARK_AS_SPAM',
      payload: emailId
    };
  };
  
  export const deleteEmail = (emailId) => {
    return {
      type: 'DELETE_EMAIL',
      payload: emailId
    };
  };
  