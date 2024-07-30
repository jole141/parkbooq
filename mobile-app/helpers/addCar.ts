import axios from 'axios';
import { api } from './const';

export const addCar = async (make: string, model: string, city: string, numbers: string, text: string, color: string, type: string, token: string) => {
  try {
    const url = `${api}/user/addCar`;
    

    const response = await axios.post(url, {
      make, model, city, numbers, text, color, type
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
