import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MARCee FAShion';

  constructor(private router:Router){}


  /**
   * HOME METHODE
   */
  Home(){
    this.GetAllProduct();
  }


  /**
   * DES METHODES CLIENT
   */

    /**
   * Methode pour modifier info d'un client
  */
 Login(){
  this.router.navigate(['login']);
}
   
  /**
   * CLIENT
   * Methode pour creer nouveau client
  */
  Create(){
    this.router.navigate(['create']);
  }

  /**
   * Methode pour modifier info d'un client
  */
 Edit(){
  this.router.navigate(['edit']);
}

 /**
   * Methode qui permet de voir le profil d'un client
   *  avec tous ses données personnelles
  */
 Perfil(){
  this.router.navigate(['perfil']);
}

  /**
   * Methode pour modifier info d'un client
  */
 DeleteClient(){
  this.router.navigate(['deleteclient']);
}



/**
   * DES METHODES PRODUIT
   */

 /**
  * PRODUCT
   * Methode pour creer une carte d'un produit
  */
 Cart(){
  this.router.navigate(['cart']);
}

 /**
   * Methode qui permet d'afficher tous les produits
  */
 GetAllProduct(){
  this.router.navigate(['catalogue']);
}

 /**
   * Methode qui permet de modifier la carte des produits
  */
 Update(){
  this.router.navigate(['update']);
}

  /**
   * Methode pour elimer une cart de produit
  */
 DeleteCartProduct(){
  this.router.navigate(['deleteproduct']);
}



/**
   * DES METHODES SHIPPING
   */

  /**
   * Methode pour modifier info d'un client
  */
 Shipping(){
  this.router.navigate(['shipping']);
}

}
