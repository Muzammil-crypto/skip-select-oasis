
import React from 'react';
import { MapPin, Trash2, Truck, FileCheck, Calendar, CreditCard } from 'lucide-react';

const steps = [
  { id: 1, title: 'Postcode', icon: MapPin, completed: true },
  { id: 2, title: 'Waste Type', icon: Trash2, completed: true },
  { id: 3, title: 'Select Skip', icon: Truck, completed: false, current: true },
  { id: 4, title: 'Permit Check', icon: FileCheck, completed: false },
  { id: 5, title: 'Choose Date', icon: Calendar, completed: false },
  { id: 6, title: 'Payment', icon: CreditCard, completed: false },
];

const Stepper = () => {
  return (
    <div className="w-full bg-card border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-border hidden sm:block">
            <div 
              className="h-full bg-primary transition-all duration-300"
              style={{ width: '33.33%' }} // 2 out of 6 steps completed
            />
          </div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div
                className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                  step.completed
                    ? 'bg-primary border-primary text-primary-foreground'
                    : step.current
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-card border-border text-muted-foreground'
                }`}
              >
                <step.icon className="w-3 h-3 sm:w-5 sm:h-5" />
              </div>
              <span
                className={`mt-2 sm:mt-2 text-xs sm:text-sm font-medium text-center max-w-16 sm:max-w-none ${
                  step.completed || step.current
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
