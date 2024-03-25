import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  sortProducts(event: Event): void {
    const target = event.target as HTMLSelectElement; 
    const sortBy = target.value;
  
    switch (sortBy) {
      case 'nameAsc':
        this.products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        this.products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'priceAsc':
        // מהקטן לגדול
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        // מהגדול לקטן
        this.products.sort((a, b) => b.price - a.price);
        break;
    }
  }
  viewProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }
}
