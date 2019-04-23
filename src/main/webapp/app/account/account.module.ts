import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemongSharedModule } from 'app/shared';

import {
    SessionsComponent,
    PasswordStrengthBarComponent,
    RegisterComponent,
    ActivateComponent,
    PasswordComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    accountState
} from './';
import { ProfileComponent } from './profile/profile.component';
import { DetailProfileComponent } from './profile/detail-profile/detail-profile.component';

@NgModule({
    imports: [DemongSharedModule, RouterModule.forChild(accountState)],
    declarations: [
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SessionsComponent,
        SettingsComponent,
        ProfileComponent,
        DetailProfileComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemongAccountModule {}
