namespace Server.Models
{
    public class User
    {
        public int Id { get; set; }
        public string name { get; set; }
        public string Password { get; set; }
        public string JobSearchField { get; set; }
// נחמי
        public job[] cv {get; set;}
    }
}