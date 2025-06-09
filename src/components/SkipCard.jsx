import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { selectSkip } from "../features/skips/skipSlice";
import { Check, Shield, Weight } from "lucide-react";

const SkipCard = ({ skip }) => {
  const dispatch = useAppDispatch();
  const selectedSkipId = useAppSelector((state) => state.skips.selectedSkipId);
  const isSelected = selectedSkipId === skip.id;
  const finalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));

  const handleSelect = () => {
    dispatch(selectSkip(skip.id));
  };

  return (
    <div
      className={`relative w-full max-w-md bg-card backdrop-blur-sm rounded-lg border-2 transition-all duration-300 group cursor-pointer overflow-hidden mb-4 mt-4
        ${
          isSelected
            ? "border-primary/60 shadow-lg shadow-primary/20 ring-2 ring-primary/20"
            : "border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
        }`}
      onClick={handleSelect}
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-center transition-all duration-300 group-hover:scale-105 opacity-100"
        style={{
          backgroundImage: `url('https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg')`,
          backgroundSize: "100% 100%",
        }}
      />

      {isSelected && (
        <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg z-10">
          <Check className="w-4 h-4" />
        </div>
      )}

      {(skip.size === 6 || skip.size === 8) && (
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold z-10">
          Popular
        </div>
      )}

      <div className="p-6 flex flex-col gap-6 relative z-10">
        {/* Header: Size and Price */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-3xl font-bold text-foreground">
              {skip.size} Yard
            </h3>
            <p className="text-sm text-muted-foreground mt-1">Skip Bin</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-foreground">
              £{finalPrice}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              inc. VAT ({skip.vat}%)
            </div>
          </div>
        </div>

        {/* Hire Period */}
        <div className="bg-muted/30 rounded-xl border border-border/50 p-4 mb-4 mt-4">
          <div className="text-sm text-muted-foreground mb-1">Hire Period</div>
          <div className="text-lg font-semibold text-foreground">
            {skip.hire_period_days} Days
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {skip.allowed_on_road && (
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-400 mr-2" />
              </div>
              <span className="text-foreground">Road Placement Allowed</span>
            </div>
          )}
          {skip.allows_heavy_waste && (
            <div className="flex items-center gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Weight className="w-4 h-4 text-blue-400 mr-2" />
              </div>
              <span className="text-foreground">Heavy Waste Permitted</span>
            </div>
          )}
        </div>

        {/* Select Button */}
        <button
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 mt-4 ${
            isSelected
              ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
              : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/30"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleSelect();
          }}
        >
          {isSelected ? "Selected" : "Select This Skip"}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
