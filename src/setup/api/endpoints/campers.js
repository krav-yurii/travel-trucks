import axios from '@api/axios/index.js';

const campersEndpoints = {
  getCampers: (params) => axios.get('/campers', { params }),
  getCamper: (id) => axios.get(`/campers/${id}`),
};

export default campersEndpoints;
