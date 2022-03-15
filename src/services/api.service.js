import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005',
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  verify = () => {
    return this.api.get('/auth/verify');
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };

  create = (body) => {
    return this.api.post('/cards', body);
  }

  edit = (body, id) => {
    return this.api.put(`/cards/${id}/edit`, body);
  }

  delete = (id) => {
    return this.api.delete(`/cards/${id}/delete`);
  };

  getCards = () => {
    return this.api.get('/cards');
  }

  getDetail = (id) => {
    return this.api.get(`/cards/${id}`);
  };

  favorite = (id) => {
    return this.api.post(`/fav/${id}/favorite`);
  }

  getFavorite = (id) => {
    return this.api.get(`/fav/${id}/favorite`);
  };

  deleteFavorite = (id) => {
    return this.api.delete(`/cards/${id}/favorite`);
  }

  getProfile = () => {
    return this.api.get(`/fav`);
  };

  getMe = () => {
    return this.api.get('/auth/me');
  }
}

// Create one instance (object) of the service
const apiService = new ApiService();

export default apiService;
