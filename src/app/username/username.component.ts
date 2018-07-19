import { Component } from '@angular/core';

@Component({
    selector: '[username]',
    templateUrl: './username.component.html'
})
export class Username {
    username = '';

    onResetUsername() {
        this.username = '';
    }
}