import React from 'react';
import './style/style.scss'
import {Header, Info, StepConsent, StepData, StepReceived, StepSelect} from "./components";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Info/>
        <div className="container">
          <hr className="divider"/>
        </div>
        <section className="steps">
          <div className="container container_column">
            <StepSelect/>
            <StepData/>
            <StepConsent/>
            <StepReceived/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
