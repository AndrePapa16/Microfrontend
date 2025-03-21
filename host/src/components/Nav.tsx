import React, { useState } from 'react';
import '../index.css';

const RemoteNav: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [connectionTime, setConnectionTime] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const [showLink, setShowLink] = useState<boolean>(false);

  const handleConnectToRemote = () => {
    // Mostra subito il link per la connessione
    setShowLink(true);
  };

  const handleRealConnection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Impedisce il redirect immediato per aggiornare lo stato prima

    setIsConnected(true);
    setConnectionTime(new Date().toLocaleTimeString());

    // Simulazione del risultato dopo la connessione
    setTimeout(() => {
      setOutput("Connessione al server remoto avvenuta con successo!\nEsecuzione comando 'uptime': 01:23:45 up 10 days, 5:42, 1 user, load average: 0.20, 0.15, 0.10");
      
      // Dopo aver aggiornato lo stato, apri il link
      window.open("http://10.0.99.26:3003", "_blank", "noopener,noreferrer");
    }, 1000); // Simula un leggero ritardo per il realismo
  };

  return (
    <nav>
      <button onClick={handleConnectToRemote}>Collegati al Remote</button>
      
      {showLink && !isConnected && (
        <div>
          <a 
            href="http://10.0.99.26:3003" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleRealConnection}
          >
            Clicca qui per connetterti
          </a>
        </div>
      )}

      {isConnected && (
        <div>
          <p>Connessione stabilita con il server reale alle {connectionTime}.</p>
          {output && (
            <>
              <h3>Risultato:</h3>
              <pre>{output}</pre>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default RemoteNav;
