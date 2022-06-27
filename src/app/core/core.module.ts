import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoutComponent } from './components/header/logout/logout.component';
import { ModuleTitleComponent } from './components/header/module-title/module-title.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/users/user.service';
import { RequestService } from './services/request.service';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HeaderComponent,
    LogoutComponent,
    ModuleTitleComponent,
    LogoComponent,
    RegisterFormComponent,
    NavigationComponent,
    NavigationComponent,
  ],
  exports: [
    HeaderComponent,
    RegisterFormComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule
  ],
  providers: [
    UserService,
    RequestService
  ]
})
export class CoreModule { }
