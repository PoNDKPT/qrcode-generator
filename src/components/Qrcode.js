import React, { useState } from 'react';
import QRCode from 'qrcode';

function Qrcode() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');
  const staticQrcode = '/image/static-qrcode.png';

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
      },
      (error, url) => {
        if (error) return console.error(error);
        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className="h-screen w-4/5 mx-auto flex flex-col justify-center lg:flex-row lg:items-center">
      <div className="lg:w-1/2">
        <h1 className="text-2xl text-center font-extrabold text-indigo-600 md:text-4xl lg:text-5xl lg:text-left">
          QR Code Generator
        </h1>
        <div className="mt-5 md:mt-8 md:flex md:justify-start lg:mt-12">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-md mb-2 outline-none px-3 py-2 border border-gray-800 md:mr-2 md:mb-0"
            placeholder="e.g. https://example.com/"
          />
          <div className="rounded-md shadow">
            <a
              href="#"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-8 md:w-max"
              onClick={GenerateQRCode}
            >
              Generator
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col items-center lg:items-end">
        <div className="w-64 h-64 mt-10 border border-gray-400 md:mt-24 lg:w-96 lg:h-96 lg:mt-0">
          <img src={qr ? qr : staticQrcode} />
        </div>
        <div className="rounded-md flex justify-center mt-6 w-64 lg:w-96">
          <a
            className="w-max flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-8 md:w-max"
            href={qr ? qr : staticQrcode}
            download="qrcode.png"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Qrcode;
