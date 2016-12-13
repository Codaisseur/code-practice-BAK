import io from 'socket.io-client';
import feathers from 'feathers-client';

class API {
  constructor() {
    // Establish a Socket.io connection
    const socket = io(process.env.FEATHERS_API_URL || 'http://localhost:5000');
    // Initialize our Feathers client application through Socket.io
    // with hooks and authentication.
    this.app = feathers()
      .configure(feathers.socketio(socket))
      .configure(feathers.hooks())
      // Use localStorage to store our login token
      .configure(feathers.authentication({
        type: 'local',
        storage: window.localStorage,
      }));
  }

  service(serviceName, authenticated = false) {
    const theService = this.app.service(serviceName)

    if (authenticated) {
      return this.app.authenticate()
      .then((response) => {
        return theService
      })
    }

    return theService
  }

  authenticate(user) {
    const { email, password } = user
    return this.app.authenticate(
      Object.assign({}, { type: 'local' }, {
      email,
      password,
    }))
  }

  signOut() {
    return this.app.logout()
  }
}


const api = new API()

export default api
