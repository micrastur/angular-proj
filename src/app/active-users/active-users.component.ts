import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html'
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private userService: UserService) {}

  onSetToInactive(id) {
    this.userService.setInactiveUser(id);
  }
}
