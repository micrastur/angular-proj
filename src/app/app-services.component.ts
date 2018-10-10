import { Component } from '@angular/core';
import { UserService } from './services/users.service';

@Component({
  selector: 'app-services',
  templateUrl: './app-services.component.html',
  styleUrls: ['./app-services.component.css']
})
export class AppComponent {
    newUser;
    activeUsers;
    inactiveUsers;

    constructor(private userService: UserService) {
        this.activeUsers = this.userService.activeUsers;
        this.inactiveUsers = this.userService.inActiveUsers;
    }

    onAddUser() {
        this.userService.setNewUser(this.newUser);
    }
}
