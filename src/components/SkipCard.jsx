
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectSkip } from '../features/skips/skipSlice';

const SkipCard = ({ skip }) => {
  const dispatch = useAppDispatch();
  const selectedSkipId = useAppSelector((state) => state.skips.selectedSkipId);
  const isSelected = selectedSkipId === skip.id;
  
  // Calculate final price including VAT
  const finalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));
  
  const handleSelect = () => {
    dispatch(selectSkip(skip.id));
  };

  return (
    <div
      className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group cursor-pointer ${
        isSelected
          ? 'border-blue-500 shadow-lg shadow-blue-500/20 ring-2 ring-blue-500/30'
          : 'border-gray-700 hover:border-blue-400/50'
      }`}
      onClick={handleSelect}
    >
      {/* Selected indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg">
          ✓
        </div>
      )}
      
      <div className="p-6">
        {/* Skip size header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">
            {skip.size} Yard Skip
          </h3>
          <div className="text-sm text-gray-300 bg-gray-700/50 px-3 py-1 rounded-full">
            {skip.hire_period_days} days
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-3xl font-bold text-white">
            £{finalPrice}
          </div>
          <div className="text-sm text-gray-400">
            inc. VAT ({skip.vat}%)
          </div>
        </div>

        {/* Features/Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skip.allowed_on_road && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400 border border-green-500/30">
              Road Permitted
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 border border-blue-500/30">
              Heavy Waste OK
            </span>
          )}
        </div>

        {/* Select button */}
        <button
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isSelected
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
              : 'bg-gray-700/50 text-gray-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/30'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleSelect();
          }}
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
