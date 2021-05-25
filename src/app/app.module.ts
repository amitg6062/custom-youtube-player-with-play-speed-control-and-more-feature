import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmitGuptaComponent } from './amit-gupta/amit-gupta.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {PenpencilPlayerModule} from 'penpencil-player';
import { PenpencilplayerComponent } from './common/penpencilplayer/penpencilplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    AmitGuptaComponent,
    PenpencilplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    PenpencilPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
