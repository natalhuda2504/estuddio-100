import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HeroComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
