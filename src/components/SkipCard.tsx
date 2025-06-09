
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectSkip } from '../features/skips/skipSlice';
import { Skip } from '../services/skipService';

interface SkipCardProps {
  skip: Skip;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip }) => {
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
      className={`relative bg-card rounded-xl border-2 transition-all duration-300 hover:shadow-lg group cursor-pointer ${
        isSelected
          ? 'border-primary shadow-lg ring-2 ring-primary/20'
          : 'border-border hover:border-primary/50'
      }`}
      onClick={handleSelect}
    >
      {/* Selected indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
          ✓
        </div>
      )}
      
      <div className="p-6">
        {/* Skip size header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground">
            {skip.size} Yard Skip
          </h3>
          <div className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
            {skip.hire_period_days} days
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="text-3xl font-bold text-foreground">
            £{finalPrice}
          </div>
          <div className="text-sm text-muted-foreground">
            inc. VAT ({skip.vat}%)
          </div>
        </div>

        {/* Features/Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {skip.allowed_on_road && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Road Permitted
            </span>
          )}
          {skip.allows_heavy_waste && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Heavy Waste OK
            </span>
          )}
        </div>

        {/* Select button */}
        <button
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isSelected
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
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
