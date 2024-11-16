import React from 'react';
import { DeviceCard } from './DeviceCard';
import { DeviceInfo } from '../data/model_data';

interface DeviceGridProps {
  devices: [string, DeviceInfo][];
}

export function DeviceGrid({ devices }: DeviceGridProps) {
  if (devices.length === 0) {
    return (
      <div className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-400">No devices found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {devices.map(([model, info]) => (
        <DeviceCard key={model} model={model} info={info} />
      ))}
    </div>
  );
}