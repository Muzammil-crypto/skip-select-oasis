
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectSkip } from '../features/skips/skipSlice';
import { Check, Shield, Weight } from 'lucide-react';

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
      className={`relative bg-card backdrop-blur-sm rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group cursor-pointer overflow-hidden ${
        isSelected
          ? 'border-primary/60 shadow-lg shadow-primary/20 ring-2 ring-primary/20'
          : 'border-border hover:border-primary/30'
      }`}
      onClick={handleSelect}
    >
      {/* Selected indicator */}
      {isSelected && (
        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg z-10">
          <Check className="w-4 h-4" />
        </div>
      )}

      {/* Popular badge for middle sizes */}
      {(skip.size === 6 || skip.size === 8) && (
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          Popular
        </div>
      )}
      
      <div className="p-6">
        {/* Skip size header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              {skip.size} Yard
            </h3>
            <p className="text-sm text-muted-foreground">Skip Bin</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-foreground">
              £{finalPrice}
            </div>
            <div className="text-xs text-muted-foreground">
              inc. VAT ({skip.vat}%)
            </div>
          </div>
        </div>

        {/* Hire period */}
        <div className="mb-6 p-3 bg-muted/30 rounded-lg border border-border/50">
          <div className="text-sm text-muted-foreground">Hire Period</div>
          <div className="text-lg font-semibold text-foreground">{skip.hire_period_days} Days</div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {skip.allowed_on_road && (
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Shield className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-foreground">Road Placement Allowed</span>
            </div>
          )}
          {skip.allows_heavy_waste && (
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Weight className="w-3 h-3 text-blue-400" />
              </div>
              <span className="text-foreground">Heavy Waste Permitted</span>
            </div>
          )}
        </div>

        {/* Select button */}
        <button
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isSelected
              ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
              : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/30'
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
