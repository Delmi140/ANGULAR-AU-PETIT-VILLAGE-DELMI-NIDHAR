import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
 productId: any;
 
 

constructor(private activated: ActivatedRoute) {}

ngOnInit(): void {
  this.productId = this.activated.snapshot.paramMap.get('id')
}

}
