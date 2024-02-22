namespace Server.Models
{
    public class Job
    {
        public string JobTitle { get; set; }
        public string JobField { get; set; }
        public int ScopeOfHours { get; set; }
        public string Area { get; set; }
        public string Requirements { get; set; }
        public bool WorkFromHome { get; set; }
    }

}