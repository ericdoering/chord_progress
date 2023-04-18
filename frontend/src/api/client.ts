import axios from "axios"
import { API_URL } from './constants';
import { AxiosResponse } from "axios";

export async function jwtGet<T>(path: string): Promise<AxiosResponse<T>>{
        const token = localStorage.getItem('token')
        if (!token) throw Error('Unauthorized')
        const headers = {'Authorization': `Bearer ${token}`}
        return await axios.get<T>(`${API_URL}/${path}`, {headers})
}

export async function jwtPost<T>(path: string, payload: object): Promise<AxiosResponse<T>> {
        const token = localStorage.getItem('token')
        if (!token) throw Error('Unauthorized')
        const headers = {'Authorization': `Bearer ${token}`}
        return await axios.post<T>(`${API_URL}/${path}`, payload, {headers})
}