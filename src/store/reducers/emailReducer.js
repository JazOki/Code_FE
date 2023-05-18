const initialState = {
    emails: [] // Aquí almacenaremos la lista de correos electrónicos
    // Puedes inicializarlo con algunos datos de ejemplo si lo deseas
  };
  
  const emailReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'MARK_AS_READ':
        // Actualizar el estado para marcar el correo como leído
        // Recuerda que el estado debe ser inmutable, por lo que debes crear una copia del estado actual y modificarla
        // Puedes utilizar métodos como map() para actualizar el estado
        return {
          ...state,
          // Actualiza el estado apropiado
        };
      case 'MARK_AS_UNREAD':
        // Actualizar el estado para marcar el correo como no leído
        return {
          ...state,
          // Actualiza el estado apropiado
        };
      case 'MARK_AS_SPAM':
        // Actualizar el estado para marcar el correo como correo no deseado
        return {
          ...state,
          // Actualiza el estado apropiado
        };
      case 'DELETE_EMAIL':
        // Actualizar el estado para eliminar el correo
        return {
          ...state,
          // Actualiza el estado apropiado
        };
      default:
        return state;
    }
  };
  
  export default emailReducer;
  