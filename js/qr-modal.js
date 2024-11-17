const modal = document.getElementById('qr-modal');
const qrContainer = document.getElementById('qr-container');
const closeButton = document.querySelector('.close-button');

// QRコードの画像パス
const qrCodes = {
    wechat: './pics/qr/ablaze_wechat.jpeg',
    telegram: './pics/qr/telegramQR.jpeg',
    whatsapp: './pics/qr/whatsappQR.jpeg'
};

document.querySelectorAll('.show-qr-button').forEach(button => {
    button.addEventListener('click', () => {
        const qrType = button.getAttribute('data-qr');
        const qrPath = qrCodes[qrType];

        if (qrPath) {
            qrContainer.innerHTML = `
                <img src="${qrPath}" alt="${qrType} QR Code">
                <h3>${qrType.charAt(0).toUpperCase() + qrType.slice(1)} QR Code</h3>
            `;
            modal.style.display = 'block';
        }
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
