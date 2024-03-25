import { Injectable } from '@angular/core';
import { products } from './Product'; 

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl?: string; 
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return products;
  }
  
  getProductById(id: number): Product | undefined {
    return products.find(product => product.id === id);
  }
}
