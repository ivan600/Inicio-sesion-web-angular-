import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import { NavComponent } from './shop/nav/nav.component';
import { InicioComponent } from './shop/inicio/inicio.component';
import { ProductsComponent } from './shop/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ShopComponent,
    NavComponent,
    InicioComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
