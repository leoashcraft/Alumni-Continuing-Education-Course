class UserProfileManagerSRP {
  private userDictionary: { [key: string]: string };

  constructor() {
    this.userDictionary = {};
  }

  // Manages user profile information
  addUser(name: string, email: string): void {
    // Add user logic
  }

  deleteUser(email: string): void {
    // Delete User Logic
  }

  updateUserEmail(oldEmail: string, newEmail: string): void {
    // Update User Email Logic
  }

  getEmailAddress(name: string, message: string): string {
    // Get Email Address Logic
    return "someEmail@email.com";
  }
}

class EmailManager {
  private userManager: UserProfileManagerSRP;
  constructor(userManager: UserProfileManagerSRP) {
    this.userManager = userManager;
  }

  sendEmail(emailAddress: string, name: string, message: string): void {
    // Send Email Logic
  }
}
