import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {id:1 , name: "Figurine Astérix ", description: 'À propos de cet article ' , price:12.99, imageUrl :'src/assets/image/figurine Astérix .jpg'},
    {id:2, name: "Figurine Obelix ", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/figurine obelix.jpg'},
    {id:3, name: "Figurine Bonnemine ", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/Figurine-Bonnemine.jpg'},
    {id:4, name: "Figurine Cesar ", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/Figurine-Cesar.jpg'},
    {id:5, name: "Figurine Panoramix ", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/Figurine-Panoramix.jpg'},
    {id:6, name: "Figurine Pirate Barbe Rouge", description: 'À propos de cet article ' , price:12.99, imageUrl:'src/assets/image/Figurine-Pirate Barbe Rouge .jpg'}
  ]

  constructor() { }
}
