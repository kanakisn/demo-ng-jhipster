import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'jhi-detail-profile',
    templateUrl: './detail-profile.component.html',
    styles: []
})
export class DetailProfileComponent implements OnInit {
    @Input()
    account: Account;

    @Input()
    accountName: string;

    @Output()
    changeNameEventEmitter: EventEmitter<string> = new EventEmitter();

    @Output()
    accountNameChange: EventEmitter<string> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    changeName(name: string) {
        this.changeNameEventEmitter.emit(name);
    }

    changeParentName(value: string) {
        this.accountNameChange.emit(value);
    }
}
