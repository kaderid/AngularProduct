import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../services/produit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [CommonModule, RouterLink],
  templateUrl: './produits.html',
})
export class Produits  implements OnInit{

  produits!: Produit[];

  constructor(private produitService: ProduitService) {
  }


  ngOnInit(): void {
        this.produits = this.produitService.listeProduits();

  }

  supprimerProduit(p: Produit){
    
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
      this.produitService.supprimerProduit(p);
   }
} 
