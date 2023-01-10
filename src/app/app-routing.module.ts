import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FilesComponent } from './files/files.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UserStatisticComponent } from './user-statistic/user-statistic.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "home", component:HomeComponent},
  {path: "about", component: AboutComponent},

  {path: "", redirectTo:"main-page", pathMatch: "full"},
  {path: "main-page", component: MainPageComponent},
  {path: "subject", component: SubjectsComponent},
  {path: "user-statistic", component: UserStatisticComponent},
  {path: "files", component: FilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
