import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FaqComponent } from './faq/faq.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetosPythonComponent } from './projetos-python/projetos-python.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FaqComponent,
    ProjetosComponent,
    ProjetosPythonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
