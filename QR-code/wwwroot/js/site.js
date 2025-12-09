// Основные функции приложения
let originalTextForEdit = '';

function enableTextEdit() {
    const display = document.getElementById('textDisplay');
    const edit = document.getElementById('textEdit');
    const buttons = document.getElementById('editButtons');

    if (display && edit && buttons) {
        originalTextForEdit = display.textContent;
        edit.value = originalTextForEdit;
        display.style.display = 'none';
        edit.style.display = 'block';
        buttons.style.display = 'block';
        edit.focus();
    }
}

function saveText() {
    const display = document.getElementById('textDisplay');
    const edit = document.getElementById('textEdit');
    const buttons = document.getElementById('editButtons');

    if (display && edit && buttons) {
        const newText = edit.value.trim();
        display.textContent = newText;

        display.style.display = 'block';
        edit.style.display = 'none';
        buttons.style.display = 'none';

        // УБРАЛИ автоматическую перегенерацию QR-кода
        // Теперь текст меняется только для отображения и печати
    }
}

function cancelEdit() {
    const display = document.getElementById('textDisplay');
    const edit = document.getElementById('textEdit');
    const buttons = document.getElementById('editButtons');

    if (display && edit && buttons) {
        display.textContent = originalTextForEdit;
        display.style.display = 'block';
        edit.style.display = 'none';
        buttons.style.display = 'none';
    }
}

function printQrCode() {
    const qrImage = document.getElementById('qrImage');
    const originalText = document.getElementById('textDisplay') ?
        document.getElementById('textDisplay').textContent.trim() :
        document.querySelector('.original-text').textContent.trim();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    if (qrImage) {
        // Используем функцию из внешнего файла
        const printHTML = getPrintTemplate(qrImage.src, originalText, formattedDate, formattedTime);

        // Создаем новое окно для печати
        const printWindow = window.open('', '_blank');
        printWindow.document.write(printHTML);
        printWindow.document.close();
    } else {
        alert('Сначала сгенерируйте QR-код!');
    }
}

function downloadQrCode() {
    const qrImage = document.getElementById('qrImage');
    if (qrImage) {
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'qr-code-' + new Date().toISOString().slice(0, 10) + '.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Сначала сгенерируйте QR-кода!');
    }
}

// Автофокус на текстовое поле при загрузке
document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.querySelector('.text-input');
    if (textInput) {
        textInput.focus();
    }
});