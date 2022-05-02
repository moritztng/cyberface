import { useState, useEffect, useRef } from 'react';
import './App.css';
import Starting from './Starting';
import Studio from './Studio';
import Stopped from './Stopped';
import InactivityAlert from './InactivityAlert';
import { fetchSynthesizer } from './Utils';

function App() {
  const inactivityCounter = useRef(1);
  const [inactivityAlert, setInactivityAlert] = useState(false);
  const [serverState, setServerState] = useState('starting');

  useEffect(() => {
    if (serverState !== 'starting') return;
    async function start() {
      await fetchSynthesizer('start');
      setServerState('started');
      function onActivity() {
        setInactivityAlert(false);
        inactivityCounter.current = 0;
      }
      window.addEventListener('mousemove', onActivity);
      window.addEventListener('touchstart', onActivity);
      const interval = window.setInterval(() => {
        if (inactivityCounter.current === 0) {
          fetchSynthesizer('start');
        } else if (inactivityCounter.current === 5) {
          setInactivityAlert(true);
        } else if (inactivityCounter.current === 10) {
          setInactivityAlert(false);
          window.removeEventListener('mousemove', onActivity);
          window.removeEventListener('touchstart', onActivity);
          clearInterval(interval);
          setServerState('stopped');
          inactivityCounter.current = 0;
        }
        inactivityCounter.current += 1;
      }, 60000);
    }
    start();
  }, [serverState]);

  return (
    <div className="App">
      {serverState === 'starting' && <Starting />}
      {serverState === 'started' && <Studio />}
      {serverState === 'stopped' && <Stopped onRestart={() => setServerState('starting')} />}
      {inactivityAlert && <InactivityAlert />}
    </div>
  );
}

export default App;
