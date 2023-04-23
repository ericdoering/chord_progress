
import { ACTIVE_KEY } from "./constants";
import axios, { AxiosResponse } from 'axios';



export async function hookTheory(deg:number[]) {
    try {
      const response: AxiosResponse = await axios.get(`https://api.hooktheory.com/v1/trends/songs?cp=${deg.join(",")}&page=2`, {
        headers: {
          'Authorization': `Bearer ${ACTIVE_KEY}`
        },
        responseType: 'json'
      });
      return response.data // assuming you want to log the response data
    } catch (error) {
      console.error(error);
    }
};
