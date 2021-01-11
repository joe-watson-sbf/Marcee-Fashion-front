import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './Product/catalogue/catalogue.component';
import { UpdateComponent } from './Product/update/update.component';
import { CartComponent } from './Product/cart/cart.component';
import { CreateComponent } from './Client/create/create.component';
import { PerfilComponent } from './Client/perfil/perfil.component';
import { EditComponent } from './Client/edit/edit.component';
import { ShippingComponent } from './Shipping/shipping/shipping.component';
import { DeleteclientComponent } from './Client/deleteclient/deleteclient.component';
import { DeleteproductComponent } from './Product/deleteproduct/deleteproduct.component';
import { LoginComponent } from './Client/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    UpdateComponent,
    CartComponent,
    CreateComponent,
    PerfilComponent,
    EditComponent,
    ShippingComponent,
    DeleteclientComponent,
    DeleteproductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
