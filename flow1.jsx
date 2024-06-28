import React, { useState, useEffect } from 'react';
import { Code, Brain, AlertTriangle, Shield, Pause, Database, CheckCircle } from 'lucide-react';

const Box = ({ icon: Icon, label, color, active }) => (
  <div className={`flex flex-col items-center justify-center p-4 ${active ? color : 'bg-gray-100'} rounded-lg shadow-md w-40 h-36 transition-colors duration-300`}>
    <Icon className={`w-10 h-10 ${active ? 'text-white' : 'text-gray-600'} mb-2`} />
    <span className={`text-xs text-center font-semibold ${active ? 'text-white' : 'text-gray-800'}`}>{label}</span>
  </div>
);

const Arrow = ({ active }) => (
  <div className={`flex-1 flex items-center justify-center`}>
    <div className={`h-1 w-12 ${active ? 'bg-blue-400' : 'bg-gray-200'} transition-colors duration-300`}></div>
  </div>
);

export default function FortaMLDetectionFlow() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">Forta ML Detection and Protocol Protection Flow</h2>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex justify-center items-center gap-4">
          <Box icon={Code} label="Contract Deployment" color="bg-green-500" active={step >= 0} />
          <Arrow active={step >= 0} />
          <Box icon={Brain} label="Forta ML Model" color="bg-purple-500" active={step >= 1} />
          <Arrow active={step >= 1} />
          <Box icon={AlertTriangle} label="Detect Malicious Opcode" color="bg-yellow-500" active={step >= 2} />
        </div>
        <div className="flex justify-center items-center gap-4">
          <Box icon={Shield} label="Forta Alert" color="bg-red-500" active={step >= 3} />
          <Arrow active={step >= 3} />
          <Box icon={Database} label="Forta API" color="bg-blue-500" active={step >= 4} />
          <Arrow active={step >= 4} />
          <Box icon={Pause} label="Protocol Auto-Pause" color="bg-orange-500" active={step >= 5} />
        </div>
      </div>
      {step === 5 && (
        <div className="mt-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-400 rounded-full">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-semibold">Potential hack prevented!</span>
          </div>
        </div>
      )}
    </div>
  );
}
