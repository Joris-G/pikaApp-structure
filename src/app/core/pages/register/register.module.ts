import { NgModule } from '@angular/core';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { CoreModule } from '../../core.module';

@NgModule({
  imports: [
    CoreModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
