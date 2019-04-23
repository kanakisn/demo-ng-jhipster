import { Component, OnInit, ViewChild } from '@angular/core';
import { Account, AccountService } from 'app/core';
import { HttpResponse } from '@angular/common/http';
import { DetailProfileComponent } from 'app/account/profile/detail-profile/detail-profile.component';

@Component({
    selector: 'jhi-profile',
    templateUrl: './profile.component.html',
    styles: []
})
export class ProfileComponent implements OnInit {
    accountUsername: string;

    account: Account;

    @ViewChild(DetailProfileComponent)
    detailProfileComponent: DetailProfileComponent;

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.fetch().subscribe((accountResponse: HttpResponse<Account>) => {
            this.accountUsername = accountResponse.body.email;
            this.account = accountResponse.body;
        });
        setInterval(() => {
            this.accountUsername = 'From parent component ' + new Date().toISOString();
        }, 10000);

        setInterval(() => {
            this.detailProfileComponent.changeParentName('From child component ' + new Date().toISOString());
        }, 7500);
    }

    changeName($event) {
        this.accountUsername = $event;
    }
}
