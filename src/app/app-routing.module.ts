import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './Client/create/create.component';
import { DeleteclientComponent } from './Client/deleteclient/deleteclient.component';
import { EditComponent } from './Client/edit/edit.component';
import { LoginComponent } from './Client/login/login.component';
import { PerfilComponent } from './Client/perfil/perfil.component';
import { CartComponent } from './Product/cart/cart.component';
import { CatalogueComponent } from './Product/catalogue/catalogue.component';
import { DeleteproductComponent } from './Product/deleteproduct/deleteproduct.component';

import { UpdateComponent } from './Product/update/update.component';
import { ShippingComponent } from './Shipping/shipping/shipping.component';

const routes: Routes = [
  {path:'catalogue', component:CatalogueComponent},
  {path:'cart', component:CartComponent},
  {path:'update', component:UpdateComponent},
  {path:'create', component:CreateComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'edit', component:EditComponent},
  {path:'shipping', component:ShippingComponent},
  {path:'deleteproduct', component:DeleteproductComponent},
  {path:'deleteclient', component:DeleteclientComponent},
  {path:'login', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
