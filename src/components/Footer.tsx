import React from 'react';

export function Footer() {
  return (
    <footer className="py-6 mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center text-gray-600 dark:text-gray-400">
        <p>
          Developed by:{' '}
          <a
            href="https://github.com/fahadboss10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
          >
            Fahad Ahmad
          </a>{' '}
          <span className="text-gray-400 dark:text-gray-500">(@fahadboss10)</span>
        </p>
      </div>
    </footer>
  );
}