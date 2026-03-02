import axios from 'axios';

// const baseURL = 'http://localhost:3000/api';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: baseURL,
});

const baseURLT = process.env.NEXT_PUBLIC_SERVER_URL + '/api';


export const nextServer = axios.create({
  baseURL: baseURLT,
  withCredentials: true,
});


export type CreateStoryResponse = {
  _id: string;
};

export async function createStory(
  formData: FormData
): Promise<CreateStoryResponse> {
  const { data } = await api.post<CreateStoryResponse>('/stories', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
}

// console.log('NEXT SERVER BASE URL:', nextServer.defaults.baseURL);