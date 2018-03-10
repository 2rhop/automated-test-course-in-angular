import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PremioComponent } from './05- componentes/premio/premio.component';
import { MaquinaExpendedoraOfflineComponent } from './05- componentes/maquina-expendedora-offline/maquina-expendedora-offline.component';

@NgModule({
  declarations: [
    AppComponent,
    PremioComponent,
    MaquinaExpendedoraOfflineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
