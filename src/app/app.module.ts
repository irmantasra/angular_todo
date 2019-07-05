import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorSliderModule } from 'ngx-color/slider';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AboutComponent } from './components/about/about.component';
import { SettingsComponent } from './components/settings/settings.component';

import { DataService } from './components/data.service';

const appRoutes: Routes = [
	{path:'', component:TodoListComponent},
  {path:'about', component:AboutComponent},
  {path:'settings', component:SettingsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AboutComponent,
    SettingsComponent
  ],
  imports: [
		BrowserModule,
    RouterModule.forRoot(appRoutes),
    ColorSliderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  @ViewChild(SettingsComponent) child;

  color:string = ''

  constructor() {}

  ngAfterViewInit() {
    this.color = this.child.color;
  }
}
