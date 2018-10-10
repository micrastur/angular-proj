import { Injectable } from '@angular/core';
import { UserStatusCounterService } from './userStatusCounter.service';

@Injectable()
export class UserService {
    activeUsers = [];
    inActiveUsers = [];

    constructor(private userStatusCounter: UserStatusCounterService) {}

    setNewUser(name: string, status?: string) {
        const userData = !status || status === 'active' ? this.activeUsers : this.inActiveUsers;
        userData.push({name});
    }

    setInactiveUser(userId: number) {
        this.inActiveUsers.push(this.activeUsers[userId]);
        this.activeUsers.splice(this.activeUsers.indexOf(this.activeUsers[userId]), 1);
        this.userStatusCounter.getInactiveCounter();
    }

    setActiveUser(userId: number) {
        this.activeUsers.push(this.inActiveUsers[userId]);
        this.inActiveUsers.splice(this.inActiveUsers.indexOf(this.inActiveUsers[userId]), 1);
        this.userStatusCounter.getActiveCounter();
    }
}
