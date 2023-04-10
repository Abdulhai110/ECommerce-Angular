import { productCategory } from './productInterface';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

constructor() { }

productCategories:Array<productCategory> =[]

}
