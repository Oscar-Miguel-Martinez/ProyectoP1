import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { UtilitiesColorComponent } from './components/utilities-color/utilities-color.component';
import { UtilitiesBorderComponent } from './components/utilities-border/utilities-border.component';
import { UtilitiesAnimationComponent } from './components/utilities-animation/utilities-animation.component';
import { UtilitiesOtherComponent } from './components/utilities-other/utilities-other.component';
import { ErrorComponent } from './components/error/error.component';
import { BlankComponent } from './components/blank/blank.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';

const APP_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'buttons', component: ButtonsComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'colors', component: UtilitiesColorComponent},
  { path: 'borders', component: UtilitiesBorderComponent},
  { path: 'animations', component: UtilitiesAnimationComponent},
  { path: 'other', component: UtilitiesOtherComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'blank', component: BlankComponent},
  { path: 'charts', component: ChartsComponent},
  { path: 'tables', component: TablesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
