const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.getElementById('qrContainer');

let size = sizes.value;

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000"
  });
}

qrText.addEventListener('input', function() {
  if (qrText.value.length > 0) {
    generateQRCode();
  }
});

sizes.addEventListener('change', function(e) {
  size = e.target.value;
  if (qrText.value.length > 0) {
    generateQRCode();
  }
});

downloadBtn.addEventListener("click", function(e) {
  e.preventDefault();
  const canvas = qrContainer.querySelector('canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert('Generate QR code first');
  }
});

