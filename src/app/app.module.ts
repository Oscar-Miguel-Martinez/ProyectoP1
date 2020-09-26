import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlankComponent } from './components/blank/blank.component';
import { UtilitiesBorderComponent } from './components/utilities-border/utilities-border.component';
import { UtilitiesColorComponent } from './components/utilities-color/utilities-color.component';
import { UtilitiesOtherComponent } from './components/utilities-other/utilities-other.component';
import { UtilitiesAnimationComponent } from './components/utilities-animation/utilities-animation.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TablesComponent } from './components/tables/tables.component';
import { CardsComponent } from './components/cards/cards.component';
import { ErrorComponent } from './components/error/error.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    BlankComponent,
    UtilitiesBorderComponent,
    UtilitiesColorComponent,
    UtilitiesOtherComponent,
    UtilitiesAnimationComponent,
    ButtonsComponent,
    TablesComponent,
    CardsComponent,
    ErrorComponent,
    ChartsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
