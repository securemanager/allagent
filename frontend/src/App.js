import React, { useEffect, useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDarkMode(hour < 12);
  }, []);

  return (
    <div style={{
      backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
      color: isDarkMode ? '#eee' : '#222',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.3s ease'
    }}>
      <h1>سلام! تم {isDarkMode ? 'تیره' : 'روشن'} بر اساس ساعت سیستم</h1>
    </div>
  );
}

export default App;
