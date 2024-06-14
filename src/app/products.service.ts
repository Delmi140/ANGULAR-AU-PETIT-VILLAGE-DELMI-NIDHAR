import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {name: "Figurine Astérix ", description: 'À propos de cet article ' , price:12.99, imageUrl :'src/assets/image/figurine Astérix .jpg'},
    {name: "Figurine Obelix ", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/figurine obelix.jpg'},
    {name: "Figurine Bonnemine ", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/Figurine-Bonnemine.jpg'},
    {name: "Figurine Cesar ", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/Figurine-Cesar.jpg'},
    {name: "Figurine Panoramix ", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/Figurine-Panoramix.jpg'},
    {name: "Figurine Pirate Barbe Rouge", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/Figurine-Pirate Barbe Rouge .jpg'}
  ]

  constructor() { }
}
