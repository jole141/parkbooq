import axios from "axios";
import { api } from "./const";

export const getCluster = async (id: string, token: string) => {
  try {
    const url = `${api}/parking-clusters/${id}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
