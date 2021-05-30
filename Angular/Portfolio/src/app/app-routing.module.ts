import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'projetos/python', component: ProjetosComponent},
  {path: 'projetos/dotnet', component: ProjetosComponent},
  {path: 'projetos/frontend', component: ProjetosComponent},
  {path: 'projetos/vbaexcel', component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
