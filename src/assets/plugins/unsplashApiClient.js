import axios from 'axios';

export const unsplashApiClient = axios.create({
  baseURL: 'https://api.unsplash.com/',
  timeout: 1000,
  headers: {
    'Accept-Version': 'v1',
    Authorization: 'Client-ID iv9cRO26HYVDuB2BZ_6TDIk-e6VTg_m2mEjeEdDJ_Qc',
  },
});
