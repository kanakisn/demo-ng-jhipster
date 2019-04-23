import { Component, OnInit } from '@angular/core';
import { Account, AccountService } from 'app/core';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-profile',
    templateUrl: './profile.component.html',
    styles: []
})
export class ProfileComponent implements OnInit {
    accountUsername: string;

    account: Account;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.fetch().subscribe((accountResponse: HttpResponse<Account>) => {
            this.accountUsername = accountResponse.body.email;
            this.account = accountResponse.body;
        });
    }

    changeName($event) {
        this.accountUsername = $event;
    }
}
