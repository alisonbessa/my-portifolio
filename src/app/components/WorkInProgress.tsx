import React from 'react';

export default function WorkInProgress() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        gap: 16,
      }}
    >
      <span style={{ fontSize: 64, color: '#fbbf24' }}>🚧</span>
      <h2 style={{ fontSize: 28, fontWeight: 600 }}>Work In Progress</h2>
      <p style={{ maxWidth: 400 }}>
        This page is under construction. Please check back soon for updates!
      </p>
    </div>
  );
}
