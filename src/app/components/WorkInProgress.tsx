import React from 'react';

export default function WorkInProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
      <span className="text-6xl text-amber-400">🚧</span>
      <h2 className="text-[28px] font-semibold">Work In Progress</h2>
      <p className="max-w-[400px]">
        This page is under construction. Please check back soon for updates!
      </p>
    </div>
  );
}
