import { Routes } from '@angular/router';

import {
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    sessionsRoute,
    settingsRoute
} from './';
import { ProfileComponent } from 'app/account/profile/profile.component';

const ACCOUNT_ROUTES = [
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    sessionsRoute,
    settingsRoute,
    {
        path: 'profile',
        component: ProfileComponent
    }
];

export const accountState: Routes = [
    {
        path: '',
        children: ACCOUNT_ROUTES
    }
];
