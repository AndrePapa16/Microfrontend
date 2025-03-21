INTRODUZIONE <br/><br/>
Un Micro-Frontend è una tecnica di sviluppo web che suddivide un'applicazione in moduli front-end indipendenti. I micro-frontend sono simili a microservizi.
Invece di avere un singolo monolite front-end, il micro-frontend divide l’interfaccia utente in più micro-applicazioni più piccole, ognuna delle quali può essere sviluppata con tecnologie diverse e da team separati. Questi micro-frontend vengono poi integrati in un'unica applicazione.
<br/><br/>
VANTAGGI : <br/><br/>
• Scalabilità – Ogni parte può essere sviluppata e aggiornata indipendentemente. <br/>
• Autonomia tecnologica – Ogni team può scegliere il framework o la tecnologia più adatta. <br/>
• Manutenzione più semplice – Il codice è più suddiviso, riducendo la complessità. <br/>
• Deploy indipendente – Si può aggiornare una parte senza influenzare il resto. <br/>
<br/>
Tecnologie usate : <br/><br/>
• Single-SPA – Gestisce il caricamento dinamico di più framework. <br/>
• Module Federation (Webpack 5) – Consente la condivisione di moduli tra applicazioni diverse. <br/>
• Web Components – Permette di creare componenti UI riutilizzabili tra diversi framework. <br/>

In questo progetto abbiamo utilizzato la tecnologia Module Federation (Webpack 5). <br/>
Si possono configurare 2 o più micro-frontend di linguaggi di programmazione differenti

CONFIGURAZIONE <br/><br/>
Qui viene configurato l'intero progetto in React 19 e all'interno ci saranno 2 altri progetti (HOST e REMOTE)<br/>

Dichiarare il comando di installazione Module Federation. <br/><br/>
![Schermata da 2025-03-21 10-04-59](https://github.com/user-attachments/assets/dfe360a9-59d6-40bb-b3df-81a79cf0df22) <br/><br/>

Inserire il nome dell'applicativo . <br/><br/>
![Schermata da 2025-03-21 10-05-09](https://github.com/user-attachments/assets/90ae5cb6-ca3f-46da-9238-9b3e38dbd69b) <br/><br/>

Selezionare il tipo di progetto a seconda del lavoro da svolgere. <br/><br/>
![Schermata da 2025-03-21 10-05-20](https://github.com/user-attachments/assets/aa95a6a2-06e2-40fb-a041-d50d3f4d106d) <br/><br/>

Digitare la porta (se non si vuole specificare, lasciare la 8080). <br/><br/>
![Schermata da 2025-03-21 10-05-28](https://github.com/user-attachments/assets/063c14c9-7ad2-4862-b8f2-d6ac8ed9a47a) <br/><br/>

Selezionare il Framework (Abbiamo utilizzato React 19). <br/><br/>
![Schermata da 2025-03-21 10-05-35](https://github.com/user-attachments/assets/58921a66-a309-4973-b377-c250431dd27e) <br/><br/>

Selezionare il CSS ( abbiamo selezionato CSS perchè Tailwind si basa su classi predefinite). <br/><br/>
![Schermata da 2025-03-21 10-05-52](https://github.com/user-attachments/assets/0a817548-f56a-4011-a092-4f2444e86c42) <br/><br/>

Qui selezioniamo la preferenza no perchè in questo applicativo non abbiamo bisogno del Cloud Zephyr. <br/><br/>
![Schermata da 2025-03-21 10-06-08](https://github.com/user-attachments/assets/9105862e-b037-4ffd-917f-b8639c55024a) <br/><br/>

Applicativo creato con successo. <br/><br/>
![Schermata da 2025-03-21 10-06-21](https://github.com/user-attachments/assets/c448da8c-c207-4d3b-bac0-5109d0837ea9) <br/><br/>

Ora, selezioniamo la directory del progetto appena creato. Creiamo un nuovo applicativo chiamato HOST. <br/><br/>
![Schermata da 2025-03-21 10-07-46](https://github.com/user-attachments/assets/5a8c1589-b93c-44b2-8aa0-0a56a9651611) <br/><br/>

Eseguiamo la stessa procedura del progetto iniziale.<br/><br/>
![Schermata da 2025-03-21 10-08-14](https://github.com/user-attachments/assets/5d7239d8-acf2-4808-8025-468aed424380) <br/><br/>

Dopo la creazione dell'applicativo HOST, creiamo  l'applicativo REMOTE sempre sotto alla directory del progetto iniziale. <br/><br/>
![Schermata da 2025-03-21 10-08-43](https://github.com/user-attachments/assets/d08e7a2c-8145-41ae-b67d-e5a8392160ba) <br/><br/>

Una volta completata la configurazione iniziale l'applicativo può essere eseguito con un IDE. <br/><br/>
![Schermata da 2025-03-21 10-09-01](https://github.com/user-attachments/assets/754056bd-8619-40af-b571-09abd5aef165) <br/><br/>

Questa è la struttura una volta aperto l'applicativo nel nostro IDE

STRUTTURA INIZIALE <br/>

![Schermata del 2025-03-21 11-32-09](https://github.com/user-attachments/assets/b0f12606-bc5b-4627-98ee-5bc347ac12b0)



STRUTTURA OTTIMALE <br/>
![Schermata del 2025-03-21 10-18-53](https://github.com/user-attachments/assets/db2722ea-2e8b-4efc-aeeb-4bc114555d4e)

MODIFICHE APPORTATE : <br/>
    1. Rimuovere la cartella SRC del progetto iniziale, e rimuovere anche tsconfig.json, rspack.config.ts, index.html e package.json <br/>
    2. Nelle direttive cartelle HOST e REMOTE eliminare rspack.config.ts e sostituirlo con webpack.config.js tramite l'apposito comando :  <br/> npm install webpack webpack-cli webpack-dev-server --save-dev ; <br/> NB: NON ESEGUIRE IL COMANDO NELLA DIRECTORY INIZIALE , perchè darà errore qualora non trova il package.json eliminato in precedenza. <br/><br/>
    3. index.html di REMOTE dichiarare l'id come "root-remote" e in  index.html di HOST  dichiarare id come "root" <br/>
    4. Controllare e modificare i file package.json di HOST e REMOTE in questa maniera : <br/>

   HOST  package.json <br/><br/>
            ![Schermata del 2025-03-21 12-05-35](https://github.com/user-attachments/assets/d980c32b-4672-40f1-b6e3-28af17ca70b6)<br/>

   REMOTE package.json <br/><br/>
            ![Schermata del 2025-03-21 12-04-24](https://github.com/user-attachments/assets/dc86e173-7885-4513-a785-5d90eeb431f2)<br/>

        
5. Installare NODE MODULES nelle directory HOST e REMOTE: npm install<br/><br/>


Webpack 5 Module Federation: Come Funziona? <br/>

Module Federation è una funzionalità introdotta in Webpack 5 che permette di caricare moduli JavaScript da altre applicazioni in fase di esecuzione. <br/>
• Permette a più applicazioni di condividere moduli tra loro senza doverli duplicare nel bundle finale. <br/>
• Utile per architetture a micro-frontend, dove diverse applicazioni frontend possono essere sviluppate e distribuite separatamente, ma integrate dinamicamente in un'unica esperienza utente. <br/>


Con Module Federation, Webpack distingue tra due tipi di applicazioni: <br/>

      Remote: Un’app che espone moduli JavaScript da riutilizzare.<br/>
      Host: Un’app che importa i moduli dal Remote e li utilizza.<br/>

Questi moduli possono essere interi componenti React, Vue, Angular, oppure solo funzioni o librerie. <br/>
In base all'esigenza di configurazione consultare la seguente guida : https://webpack.js.org/guides/<br/><br/>

   CONFIGURAZIONE WEBPACK.CONFIG.JS  DI HOST <br/><br/>

![webpack-host](https://github.com/user-attachments/assets/d0cc8503-31ca-4f54-804a-6e7eebbd9d3b) <br/>

   CONFIGURAZIONE WEBPACK.CONFIG.JS  DI REMOTE <br/><br/>

![webpack-remote](https://github.com/user-attachments/assets/cd56b359-8b48-456f-99f4-2e3947a65862)









