using QRCoder;

namespace QrCodeGenerator.Services
{
    public class QrCodeService : IQrCodeService
    {
        public byte[] GenerateQrCode(string text)
        {
            using (var qrGenerator = new QRCodeGenerator())
            {
                // Создаем данные для QR-кода
                using (var qrCodeData = qrGenerator.CreateQrCode(text, QRCodeGenerator.ECCLevel.Q))
                {
                    // Используем PngByteQRCode, который работает на Linux без System.Drawing
                    using (var qrCode = new PngByteQRCode(qrCodeData))
                    {
                        // Возвращаем массив байтов (готовую PNG картинку)
                        return qrCode.GetGraphic(20);
                    }
                }
            }
        }
    }
}
