import { Component, OnInit } from '@angular/core';

import { ProductsService, } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit {
  position_held:string='';
  products: any[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.products
  }
}
