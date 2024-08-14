import { useState } from 'react'
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';

function App() {

  const [texto, setTexto] = useState('');
  const [qrLink, setQrLink] = useState('');

  function handleGenerate(link) {
    QRCodeLink.toDataURL(link, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrLink(url)
    })
  }

  function handleClique(e) {
    setTexto(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className='container'>
      <h1>Gerar QRCode</h1>
      <QRCode
        value={texto}
      />
      <input
        className='input'
        type='text'
        placeholder='Insira a url...'
        value={texto}
        onChange={(e) => handleClique(e)}
      />
      <a className='button' href={qrLink} download={`qrcode.png`}>Baixar QRCode</a>
    </div>
  );
}

export default App;
