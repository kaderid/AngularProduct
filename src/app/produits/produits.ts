import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.html',
})
export class Produits  implements OnInit{

  produits!: Produit[];

  constructor(private produitService: ProduitService,
              public authService: AuthService ) {}


  ngOnInit(): void {
   this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
    });
  }

 supprimerProduit(p: Produit) 
 {
   let conf = confirm("Etes-vous sûr ?"); 
   if (conf) 
    this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
   console.log("produit supprimé"); 
   this.chargerProduits(); 
  }); 
}
} 
