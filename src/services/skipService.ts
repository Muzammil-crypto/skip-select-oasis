
import api from './api';

export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

// Mock data for development - replace with actual API call
const mockSkips: Skip[] = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    price_before_vat: 278,
    vat: 20,
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    price_before_vat: 305,
    vat: 20,
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    price_before_vat: 375,
    vat: 20,
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    price_before_vat: 425,
    vat: 20,
    allowed_on_road: true,
    allows_heavy_waste: true
  },
  {
    id: 17937,
    size: 12,
    hire_period_days: 14,
    price_before_vat: 475,
    vat: 20,
    allowed_on_road: false,
    allows_heavy_waste: true
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    price_before_vat: 525,
    vat: 20,
    allowed_on_road: false,
    allows_heavy_waste: true
  }
];

export const fetchSkips = async (): Promise<Skip[]> => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, return mock data
    // In production, uncomment the line below and remove mock data
    // const response = await api.get('/skips');
    // return response.data;
    
    return mockSkips;
  } catch (error) {
    console.error('Error fetching skips:', error);
    throw new Error('Failed to fetch skip options');
  }
};
