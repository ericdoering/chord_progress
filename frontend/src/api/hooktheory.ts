
import { ACTIVE_KEY } from "./constants";
import axios, { AxiosResponse } from 'axios';



export async function hookTheory(chord1:number, chord2:number, chord3:number) {
    try {
      const response: AxiosResponse = await axios.get(`https://api.hooktheory.com/v1/trends/songs?cp=${chord1},${chord2},${chord3}&page=2`, {
        headers: {
          'Authorization': `Bearer ${ACTIVE_KEY}`
        },
        responseType: 'json'
      });
      console.log(response.data); // assuming you want to log the response data
    } catch (error) {
      console.error(error);
    }
};
