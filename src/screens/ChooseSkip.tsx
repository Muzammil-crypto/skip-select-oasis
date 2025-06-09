
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSkipsAsync } from '../features/skips/skipSlice';
import SkipCard from '../components/SkipCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const ChooseSkip: React.FC = () => {
  const dispatch = useAppDispatch();
  const { skips, loading, error, selectedSkipId } = useAppSelector((state) => state.skips);

  useEffect(() => {
    // Fetch skips when component mounts
    if (skips.length === 0) {
      dispatch(fetchSkipsAsync());
    }
  }, [dispatch, skips.length]);

  const selectedSkip = skips.find(skip => skip.id === selectedSkipId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Skip Size
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect skip size for your waste disposal needs. 
              All prices include VAT and delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading && <Loader />}
        
        {error && <ErrorMessage message={error} />}
        
        {!loading && !error && skips.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skips.map((skip) => (
                <SkipCard key={skip.id} skip={skip} />
              ))}
            </div>
            
            {/* Selection summary */}
            {selectedSkip && (
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  You've selected a {selectedSkip.size} Yard Skip
                </h3>
                <p className="text-muted-foreground mb-4">
                  £{Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100))} for {selectedSkip.hire_period_days} days
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Continue to Booking
                </button>
              </div>
            )}
          </>
        )}
        
        {!loading && !error && skips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No skip options available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseSkip;
