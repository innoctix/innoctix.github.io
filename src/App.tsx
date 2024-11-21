import Nav from './pages/Nav';
import Landing from './pages/Landing';
import { useEffect, useState } from 'react';

function App() {

  const [theme, setTheme] = useState< 'light' | 'dark' >('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <div className='main-body'>
        <Landing theme={theme} />
      </div>
    </>
  )
}

export default App
