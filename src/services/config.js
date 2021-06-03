import axios from 'axios'


const pullData = (request) => request.then(({ data }) => data);

export const get = ({ url }) =>
  pullData(
    axios.get(url),
  );