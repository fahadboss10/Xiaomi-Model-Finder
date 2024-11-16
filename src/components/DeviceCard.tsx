import React from 'react';
import { DeviceInfo } from '../data/model_data';

interface DeviceCardProps {
  model: string;
  info: DeviceInfo;
}

export function DeviceCard({ model, info }: DeviceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {model}
      </h3>
      <div className="space-y-2">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <span className="font-medium mr-2">SoC:</span>
          <span>{info.SoC}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <span className="font-medium mr-2">Codename:</span>
          <span className="text-indigo-600 dark:text-indigo-400">{info.CodeName}</span>
        </div>
      </div>
    </div>
  );
}