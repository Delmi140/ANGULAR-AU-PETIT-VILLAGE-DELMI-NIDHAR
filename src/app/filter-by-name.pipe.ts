import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products:any[] = [], filterText:string)  {
    if(products.length === 0 || filterText === '') {
      return products;

    }else{
      return products.filter((product) => {return product.name.toLowercase() === filterText.toLowerCase()})
    }
    
  }
}
