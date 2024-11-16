import React, { useState, useMemo } from 'react';
import { modelData } from './data/model_data';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { DeviceGrid } from './components/DeviceGrid';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { useDarkMode } from './hooks/useDarkMode';
import { Smartphone } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useDarkMode();

  const filteredDevices = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return Object.entries(modelData).filter(([model, info]) => 
      model.toLowerCase().includes(query) ||
      info.SoC.toLowerCase().includes(query) ||
      info.CodeName.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors">
      <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-center mb-4">
          <Smartphone className="w-12 h-12 text-orange-500" />
        </div>
        <Header deviceCount={Object.keys(modelData).length} />
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <DeviceGrid devices={filteredDevices} />
      </div>
      <Footer />
    </div>
  );
}

export default App;