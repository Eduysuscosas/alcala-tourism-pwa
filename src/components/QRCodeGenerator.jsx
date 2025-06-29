import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator = () => {
  const [qrUrl, setQrUrl] = useState('');
  const [shareUrl, setShareUrl] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    // Generate the GitHub Pages URL based on the repository
    // User will need to update this with their own GitHub username
    const githubUsername = 'YOUR_GITHUB_USERNAME';
    const repoName = 'alcala-tourism-pwa';
    const deployedUrl = `https://${githubUsername}.github.io/${repoName}/`;
    setShareUrl(deployedUrl);

    // Generate QR code
    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        deployedUrl,
        {
          width: 200,
          margin: 1,
          color: {
            dark: '#004d40',
            light: '#ffffff'
          }
        },
        (error) => {
          if (error) console.error('Error generating QR code:', error);
        }
      );

      // Also generate a URL for the QR code that can be downloaded
      QRCode.toDataURL(
        deployedUrl,
        {
          width: 500,
          margin: 2,
          color: {
            dark: '#004d40',
            light: '#ffffff'
          }
        },
        (err, url) => {
          if (err) console.error('Error generating QR code URL:', err);
          setQrUrl(url);
        }
      );
    }
  }, []);

  // Function to handle QR code download
  const downloadQRCode = () => {
    if (!qrUrl) return;

    const link = document.createElement('a');
    link.href = qrUrl;
    link.download = 'alcala-tourism-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Escanea el código QR para visitar la web</h3>
      
      <div className="border-2 border-emerald-600 p-2 rounded-md bg-white mb-4">
        <canvas ref={canvasRef} />
      </div>
      
      <div className="flex flex-col space-y-2 w-full">
        <button 
          onClick={downloadQRCode}
          className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded"
        >
          Descargar código QR
        </button>
        
        <div className="text-sm text-center mt-2">
          <p>URL de la aplicación:</p>
          <a 
            href={shareUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-emerald-700 underline break-all"
          >
            {shareUrl}
          </a>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;