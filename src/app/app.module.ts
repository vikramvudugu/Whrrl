import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule}  from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { ServicesService } from './services.service';
const routes: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
