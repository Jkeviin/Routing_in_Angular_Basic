import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componente/nav/nav.component';
import { FooterComponent } from './componente/footer/footer.component';
import { LoginComponent } from './componente/login/login.component';
import { RegisterComponent } from './componente/register/register.component';
import { CursosComponent } from './componente/cursos/cursos.component';
import { MisionComponent } from './componente/mision/mision.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CursosComponent,
    MisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
