import QRCode from 'qrcode-react';
import { useState } from 'react'
import './App.css';

function App() {

  const [ texto, setTexto ] = useState('');
  const [ qr, setQr ] = useState('');

  function handleClique (){
    setQr(texto);

  }

  return (
    <div className='container'>
      <div>
        <h1>Gerar QRCode</h1>
        <QRCode
          className='qrcode'
          value={qr}
          size={256}
        />
      </div>
      <div>
        <input
          className='input'
          type='text'
          placeholder='Insira a url...'
          value={texto}
          onChange={ (e) => setTexto(e.target.value) }
        />
      </div>
      <div>
        <button className='button' onClick={ handleClique }>
          Gerar
        </button>
      </div>
    </div>
  );
}

export default App;
