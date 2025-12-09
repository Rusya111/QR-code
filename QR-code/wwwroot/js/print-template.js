function getPrintTemplate(qrImageSrc, originalText, formattedDate, formattedTime) {
    return '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<title>Печать QR-кода</title>' +
        '<meta charset="UTF-8">' +
        '<style>' +
        'body {' +
        '    font-family: Arial, sans-serif;' +
        '    margin: 0;' +
        '    padding: 10px;' +  
        '    height: 100vh;' +  
        '    overflow: hidden;' + 
        '}' +
        '.print-container {' +
        '    max-width: 700px;' + 
        '    margin: 0 auto;' +
        '    padding: 10px;' +   
        '    position: relative;' +
        '    height: calc(100vh - 20px);' + 
        '    box-sizing: border-box;' +
        '}' +
        '.date-time {' +
        '    position: absolute;' +
        '    top: 10px;' +        
        '    right: 10px;' +      
        '    color: #666;' +
        '    font-size: 11px;' +  
        '    text-align: right;' +
        '    line-height: 1.3;' +
        '}' +
        '.content-center {' +
        '    display: flex;' +
        '    flex-direction: column;' +
        '    align-items: center;' +
        '    justify-content: flex-start;' + 
        '    height: 100%;' +
        '    padding-top: 40px;' + 
        '}' +
        '.qr-image-print {' +
        '    max-width: 250px;' +  
        '    margin: 15px auto;' + 
        '    border: 1px solid #ddd;' +
        '    padding: 10px;' +     
        '    border-radius: 8px;' +
        '}' +
        '.text-container {' +
        '    margin: 20px auto;' + 
        '    max-width: 550px;' + 
        '    padding: 15px;' +     
        '    background: #f8f9fa;' +
        '    border-radius: 8px;' +
        '    border-left: 3px solid #4cc9f0;' + 
        '}' +
        '.text-container h3 {' +
        '    color: #3f37c9;' +
        '    margin: 0 0 40px 0;' + 
        '    text-align: center;' +
        '    font-size: 40px;' +  
        '    font-weight: bold;'  +      
        '}' +
        '.original-text-print {' +
        '    background: white;' +
        '    padding: 15px;' +      
        '    border-radius: 6px;' +
        '    border: 1px solid #e1e5eb;' +
        '    word-break: break-word;' +
        '    line-height: 2.4;' +   
        '    font-size: 40px;' +    
        '    max-height: 200px;' +  
        '    overflow-y: auto;' +   
        '}' +
        '.print-footer {' +
        '    margin-top: 20px;' +   
        '    color: #666;' +
        '    font-size: 10px;' +    
        '    text-align: center;' +
        '    border-top: 1px solid #ddd;' +
        '    padding-top: 10px;' +  
        '    position: absolute;' + 
        '    bottom: 10px;' +
        '    left: 0;' +
        '    right: 0;' +
        '}' +
        
        '@media print {' +
        '    body {' +
        '        padding: 0 !important;' +
        '        margin: 0 !important;' +
        '        height: auto !important;' +
        '    }' +
        '    .print-container {' +
        '        height: auto !important;' +
        '        page-break-inside: avoid;' + 
        '    }' +
        '    .date-time {' +
        '        position: fixed !important;' +
        '        top: 5mm !important;' +
        '        right: 5mm !important;' +
        '    }' +
        '    .qr-image-print {' +
        '        max-width: 600px !important;' + 
        '    }' +
        '    .text-container {' +
        '        max-width: 500px !important;' +
        '    }' +
        '    .print-footer {' +
        '        position: fixed !important;' +
        '        bottom: 5mm !important;' +
        '    }' +
        '    @page {' +
        '        margin: 10mm;' + 
        '        size: A6 portrait;' +
        '    }' +
        '}' +
        '</style>' +
        '</head>' +
        '<body>' +
        '<div class="print-container">' +
        '<div class="date-time">' +
        '</div>' +
        '<div class="content-center">' +
        '<h1 style="color: #4361ee; margin-bottom: 15px; font-size: 20px;">QR-код</h1>' +
        '<div>' +
        '<img src="' + qrImageSrc + '" class="qr-image-print" alt="QR Code">' +
        '</div>' +
        '<div class="text-container">' +
        '<h3>Номер заказа:</h3>' +  
        '<div class="original-text-print">' + originalText + '</div>' +
        '</div>' +
        '<div class="print-footer">' +
        '<p>© ' + new Date().getFullYear() + ' СЦ МК Уфа</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<script>' +
        'window.onload = function() {' +
        '    window.focus();' +
        '    setTimeout(function() {' +
        '        window.print();' +
        '    }, 100);' +  
        '};' +
        '<\/script>' +
        '</body>' +
        '</html>';
}