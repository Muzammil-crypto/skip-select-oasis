import apiClient from '../api/apiClient';
import { API_ENDPOINTS } from '../api/endpoints/endpoints';

class SkipService {
  async getSkips(params = {}) {
    const response = await apiClient.get(API_ENDPOINTS.SKIPS, { params });
    return response.data;
  }

  async getSkipById(id) {
    const response = await apiClient.get(`${API_ENDPOINTS.SKIPS}/${id}`);
    return response.data;
  }
}

export const skipService = new SkipService();