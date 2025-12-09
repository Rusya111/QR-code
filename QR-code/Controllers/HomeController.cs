using Microsoft.AspNetCore.Mvc;
using QrCodeGenerator.Models;
using QrCodeGenerator.Services;

namespace QrCodeGenerator.Controllers
{
    public class HomeController : Controller
    {
        private readonly IQrCodeService _qrCodeService;

        public HomeController(IQrCodeService qrCodeService)
        {
            _qrCodeService = qrCodeService;
        }

        public IActionResult Index()
        {
            return View(new QrCodeModel());
        }

        [HttpPost]
        public IActionResult Generate(QrCodeModel model)
        {
            if (!string.IsNullOrEmpty(model.Text))
            {
                model.QrCodeImage = _qrCodeService.GenerateQrCode(model.Text);
            }
            else
            {
                model.QrCodeImage = null;
            }

            return View("Index", model);
        }
    }
}