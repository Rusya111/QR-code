using QRCoder;
using System.Drawing;
using System.Drawing.Imaging;

namespace QrCodeGenerator.Services
{
    public class QrCodeService : IQrCodeService
    {
        public byte[] GenerateQrCode(string text)
        {
            using (var qrGenerator = new QRCodeGenerator())
            using (var qrCodeData = qrGenerator.CreateQrCode(text, QRCodeGenerator.ECCLevel.Q))
            using (var qrCode = new QRCode(qrCodeData))
            using (var qrCodeImage = qrCode.GetGraphic(20))
            using (var stream = new MemoryStream())
            {
                qrCodeImage.Save(stream, ImageFormat.Png);
                return stream.ToArray();
            }
        }
    }
}