import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PremioComponent } from './05- componentes/premio/premio.component';
import { MaquinaExpendedoraOfflineComponent } from './05- componentes/maquina-expendedora-offline/maquina-expendedora-offline.component';
import { MaquinaExpendedoraOnlineComponent } from './05- componentes/maquina-expendedora-online/maquina-expendedora-online.component';
import { MaquinaExpendedoraService } from './05- componentes/maquina-expendedora-online/maquina-expendedora.service';

@NgModule({
  declarations: [
    AppComponent,
    PremioComponent,
    MaquinaExpendedoraOfflineComponent,
    MaquinaExpendedoraOnlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MaquinaExpendedoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
