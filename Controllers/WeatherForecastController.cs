using Microsoft.AspNetCore.Mvc;
using Angular.Models;

namespace Angular.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;
    ApplicationContext _db;
    public WeatherForecastController(ILogger<WeatherForecastController> logger, ApplicationContext Dbcontext)
    {
        _logger = logger;
        _db = Dbcontext;
    }

    [HttpGet]
    public IEnumerable<Product> Get()
    {
        return _db.Products.ToArray();
    }
    [HttpPost]
    public IActionResult Post(User user)
    {
        Console.WriteLine(user.age);
        return Ok();
    }
}
