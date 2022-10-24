import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerCursosComponent } from './componente/container-cursos/container-cursos.component';
import { ContainerInicioComponent } from './componente/container-inicio/container-inicio.component';
import { ContainerMisionComponent } from './componente/container-mision/container-mision.component';
import { ContainerRegisterComponent } from './componente/container-register/container-register.component';

const routes: Routes = [
  { path: '', component: ContainerInicioComponent },
  { path: 'inicio', component: ContainerInicioComponent },
  { path: 'curso', component: ContainerCursosComponent },
  { path: 'register', component: ContainerRegisterComponent },
  { path: 'mision', component: ContainerMisionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }