using System.ComponentModel.DataAnnotations;

namespace TelerikDemo.Models
{
    public class FormModel
    {
        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "First name cannot exceed 50 characters")]
        public string FirstName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Last name is required")]
        [StringLength(50, ErrorMessage = "Last name cannot exceed 50 characters")]
        public string LastName { get; set; } = string.Empty;

        [Phone(ErrorMessage = "Please enter a valid phone number")]
        public string Phone { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Age is required")]
        [Range(0, 120, ErrorMessage = "Age must be between 0 and 120")]
        public int Age { get; set; }

        [Required(ErrorMessage = "Income is required")]
        [Range(0, 1000000000, ErrorMessage = "Income must be between 0 and 1,000,000,000")]
        public decimal Income { get; set; }

        [Required(ErrorMessage = "Birth date is required")]
        [DataType(DataType.Date)]
        public DateTime Birthdate { get; set; }

        public bool IsAlive { get; set; }
    }
}