// services/api.js

import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URI}/upload`, data);

    if (response && response.data && response.data.path) {
      return response.data;
    } else {
      console.error('Invalid response format:', response);
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('Error while calling the API:', error.message);
    throw error;
  }
};

export const getFiles = async () => {
  try {
    const response = await axios.get(`${API_URI}/files`);
    return response.data;
  } catch (error) {
    console.error('Error fetching files:', error.message);
    throw error;
  }
};
