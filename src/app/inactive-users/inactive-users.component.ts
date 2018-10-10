import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html'
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UserService) {}

  onSetToActive(id) {
      this.userService.setActiveUser(id);
  }
}
