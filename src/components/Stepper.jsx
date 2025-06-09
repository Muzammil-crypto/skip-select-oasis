
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
    <div className="w-full bg-gray-900/50 border-b border-gray-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                    step.completed
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : step.current
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : 'bg-gray-800 border-gray-600 text-gray-400'
                  }`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    step.completed || step.current
                      ? 'text-white'
                      : 'text-gray-400'
                  }`}
                >
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-4 ${
                    step.completed ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stepper;
