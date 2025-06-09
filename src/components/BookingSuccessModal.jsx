
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { CheckCircle, Calendar, MapPin, Truck } from 'lucide-react';

const BookingSuccessModal = ({ open, onOpenChange, selectedSkip }) => {
  if (!selectedSkip) return null;

  const finalPrice = Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          
          <DialogTitle className="text-2xl font-bold text-foreground">
            Booking Confirmed!
          </DialogTitle>
          
          <p className="text-muted-foreground">
            Your skip hire booking has been successfully submitted. We'll be in touch shortly to confirm delivery details.
          </p>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {/* Booking Summary */}
          <div className="bg-muted/30 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Booking Summary
            </h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Skip Size:</span>
                <span className="text-foreground font-medium">{selectedSkip.size} Yard</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hire Period:</span>
                <span className="text-foreground font-medium">{selectedSkip.hire_period_days} Days</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Cost:</span>
                <span className="text-foreground font-bold">£{finalPrice}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">What happens next?</h4>
            
            <div className="space-y-2">
              <div className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-xs">1</span>
                </div>
                <div>
                  <p className="text-foreground font-medium">Confirmation Call</p>
                  <p className="text-muted-foreground">We'll call you within 2 hours to confirm details</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-xs">2</span>
                </div>
                <div>
                  <p className="text-foreground font-medium">Schedule Delivery</p>
                  <p className="text-muted-foreground">Choose your preferred delivery date and time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-xs">3</span>
                </div>
                <div>
                  <p className="text-foreground font-medium">Skip Delivered</p>
                  <p className="text-muted-foreground">Your skip will be delivered at the agreed time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 bg-muted text-muted-foreground px-4 py-2 rounded-lg font-medium hover:bg-muted/80 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View Booking
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingSuccessModal;
