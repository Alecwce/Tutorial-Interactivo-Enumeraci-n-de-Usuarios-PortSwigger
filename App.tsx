
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TutorialStep from './components/TutorialStep';
import Navigation from './components/Navigation';
import { tutorialSteps } from './constants'; // Ensure this path is correct if constants.tsx is not in root

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, tutorialSteps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-900">
      <div className="w-full max-w-3xl lg:max-w-4xl">
        <Header title="Tutorial Interactivo: Enumeración de Usuarios (PortSwigger Lab)" />
        <main className="mt-1 bg-gray-800 shadow-lg rounded-b-lg">
          <TutorialStep
            step={tutorialSteps[currentStep]}
            currentStepNumber={currentStep + 1}
            totalSteps={tutorialSteps.length}
          />
        </main>
        <Navigation
          currentStep={currentStep}
          totalSteps={tutorialSteps.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
         <footer className="text-center mt-8 text-sm text-gray-500">
            <p>Requisitos: Kali Linux, Firefox, FoxyProxy Standard, Burp Suite Community Edition.</p>
            <p>Basado en el laboratorio "Username enumeration via different responses" de PortSwigger.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
