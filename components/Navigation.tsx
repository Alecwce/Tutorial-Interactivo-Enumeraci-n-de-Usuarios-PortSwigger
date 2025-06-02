
import React from 'react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentStep, totalSteps, onPrevious, onNext }) => {
  const commonButtonClasses = "px-6 py-2 rounded-md font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400";
  const activeButtonClasses = "bg-sky-600 hover:bg-sky-500 text-white";
  const disabledButtonClasses = "bg-gray-600 text-gray-400 cursor-not-allowed";

  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onPrevious}
        disabled={currentStep === 0}
        className={`${commonButtonClasses} ${currentStep === 0 ? disabledButtonClasses : activeButtonClasses}`}
      >
        Anterior
      </button>
      <button
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
        className={`${commonButtonClasses} ${currentStep === totalSteps - 1 ? disabledButtonClasses : activeButtonClasses}`}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Navigation;
