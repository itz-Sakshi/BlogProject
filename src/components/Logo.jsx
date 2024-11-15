import React from 'react';

function Logo({ width = '100px' }) {
  return (
    <div className={`inline-block px-6 py-2 duration-200`} style={{ width }}>
      FinSavy
    </div>
  );
}

export default Logo;
