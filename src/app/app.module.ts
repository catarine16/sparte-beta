import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe tanto FormsModule quanto ReactiveFormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { TopbarComponent } from './widgets/topbar/topbar.component';
import { LoginComponent } from './components/login/login.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { EstudosComponent } from './components/estudos/estudos.component';
import { ExpoComponent } from './components/expo/expo.component';
import { InspireseComponent } from './components/inspirese/inspirese.component';
import { CadastroComponent } from './account/cadastro/cadastro.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    MainscreenComponent,
    TopbarComponent,
    LoginComponent,
    ArtistasComponent,
    EstudosComponent,
    ExpoComponent,
    InspireseComponent,
    CadastroComponent,
    PerfilComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
