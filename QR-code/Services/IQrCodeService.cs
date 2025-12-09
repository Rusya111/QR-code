using QrCodeGenerator.Models;

namespace QrCodeGenerator.Services
{
    public interface IQrCodeService
    {
        byte[] GenerateQrCode(string text);
    }
}