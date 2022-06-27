import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { CoreModule } from '../../core.module';
import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CoreModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage
  ],
})
export class HomePageModule {}
