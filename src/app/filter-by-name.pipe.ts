import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products:any[] = [], position_held:string)  {
    if(products.length === 0 || position_held === '') {
      return products;

    }else{
      return products.filter((product) => {return product.name.toLowercase() === position_held.toLowerCase()})
    }
    
  }
}
