// Future immersive features placeholder
function showAlert(message) {
    const box = document.createElement('div');
    box.style.position = 'fixed';
    box.style.bottom = '10px';
    box.style.right = '10px';
    box.style.background = '#ff4444';
    box.style.color = 'white';
    box.style.padding = '10px';
    box.innerText = message;
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 3000);
}
