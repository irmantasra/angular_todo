import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
	{path:'', component:TodoListComponent},
	{path:'about', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AboutComponent
  ],
  imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
