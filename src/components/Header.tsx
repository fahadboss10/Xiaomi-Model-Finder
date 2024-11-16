import React from 'react';

interface HeaderProps {
  deviceCount: number;
}

export function Header({ deviceCount }: HeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
        Xiaomi Model Finder
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Search through {deviceCount} Xiaomi devices
      </p>
    </div>
  );
}