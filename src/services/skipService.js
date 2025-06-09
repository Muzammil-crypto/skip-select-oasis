
// Mock data for skip options
const mockSkips = [
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
  }
];

// Simulate API fetch with delay
export const fetchSkips = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockSkips);
    }, 1000);
  });
};
