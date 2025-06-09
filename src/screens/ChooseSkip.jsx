import SkipCard from '../components/SkipCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Stepper from '../components/Stepper';
import { useSkips } from '../hooks/use-skips';
import { useAppSelector } from '../hooks/redux';

const ChooseSkip = () => {
  const { skips, loading, error } = useSkips();
  const selectedSkipId = useAppSelector((state) => state.skips.selectedSkipId);
  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Stepper */}
      <Stepper />

      {/* Header */}
      <div className="bg-card/50 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold text-foreground mb-2 mt-4">
              Choose Your Skip Size
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the skip size that best suits your needs, whether it's for a small home renovation or a large construction project.
            </p>
          </div>
        </div>
      </div>

      {/* Skip Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {skips.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {skips.map((skip) => (
                <SkipCard key={skip.id} skip={skip} />
              ))}
            </div>

            {/* Selection summary */}
            {selectedSkip && (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  You've selected a {selectedSkip.size} Yard Skip
                </h3>
                <p className="text-muted-foreground mb-4">
                  £{Math.round(
                    selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100)
                  )} for {selectedSkip.hire_period_days} days
                </p>
                <button 
                  onClick={handleContinueBooking}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                >
                  Continue to Booking
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No skip options available at the moment.
            </p>
          </div>
        )}
      </div>

      {/* Success Modal */}
      <BookingSuccessModal 
        open={showSuccessModal} 
        onOpenChange={setShowSuccessModal}
        selectedSkip={selectedSkip}
      />
    </div>
  );
};

export default ChooseSkip;
