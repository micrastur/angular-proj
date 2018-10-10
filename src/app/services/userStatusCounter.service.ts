export class UserStatusCounterService {
    activeStatus = 0;
    inactiveStatus = 0;

    getActiveCounter() {
        this.activeStatus += 1;
        console.log(`Switched to active status: ${this.activeStatus}`);
    }

    getInactiveCounter() {
        this.inactiveStatus += 1;
        console.log(`Switched to inactive status: ${this.inactiveStatus}`);
    }
}
