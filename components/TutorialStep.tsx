
import React from 'react';
import { TutorialStepData } from '../types';

interface TutorialStepProps {
  step: TutorialStepData;
  currentStepNumber: number;
  totalSteps: number;
}

const TutorialStep: React.FC<TutorialStepProps> = ({ step, currentStepNumber, totalSteps }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full">
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-sky-400">{step.title}</h2>
        <p className="text-sm text-gray-400">Paso {currentStepNumber} de {totalSteps}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-sky-300">Objetivo:</h3>
        <p className="mt-1 text-gray-300">{step.objective}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-sky-300">Acciones:</h3>
        <ul className="list-decimal list-inside mt-2 space-y-3 text-gray-300">
          {step.actions.map((action, index) => (
            // The key is already provided in constants.tsx, but React might still want one here if it's just an array
             <React.Fragment key={index}>{action}</React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TutorialStep;
