import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { PlayersComponent } from './core/components/players/players.component';
import { PlayerDetailsComponent } from './core/components/players/player-details.component';

import { AppService } from './core/services/app.service';
import { Storage } from './core/utilities/storage';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PlayersComponent,
    PlayerDetailsComponent
  ],
  providers: [
    AppService,
    Storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }