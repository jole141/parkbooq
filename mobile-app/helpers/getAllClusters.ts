import axios from 'axios';
import {api} from './const';

export const getAllClusters = async () => {
  try {
    const url = `${api}/parking-clusters`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
