namespace TelerikDemo.Models;

public class PanelItem
{
    public string Text { get; set; }
    public string Url { get; set; }
    public string Icon { get; set; }
    public List<PanelItem> Items { get; set; }
}