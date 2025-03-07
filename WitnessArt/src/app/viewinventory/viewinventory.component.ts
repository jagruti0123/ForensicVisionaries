import { Component } from '@angular/core';
import { MaininventoryService } from '../maininventory.service';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-viewinventory',
  templateUrl: './viewinventory.component.html',
  styleUrl: './viewinventory.component.css'
})

export class ViewinventoryComponent {

  products: Product[] = [];
  newProduct: Product = { name: '', size: '', color: '', quantity: 0, threshold: 0 };
  editingIndex: number | null = null;
  searchTerm: string = '';

  constructor(private maininventoryService: MaininventoryService) {
    this.products = this.maininventoryService.getAllProducts(this.searchTerm);
  }

  addProduct() {
    if (this.editingIndex !== null) {
      // Update existing product
      this.maininventoryService.updateProduct(this.editingIndex, this.newProduct);
      this.editingIndex = null;
    } else {
      // Add new product
      this.maininventoryService.addProduct(this.newProduct);
    }
    this.products = this.maininventoryService.getAllProducts(this.searchTerm);
    this.resetForm();
  }

  editProduct(index: number) {
    this.newProduct = { ...this.products[index] };
    this.editingIndex = index;
  }

  deleteProduct(index: number) {
    this.maininventoryService.deleteProduct(index);
    this.products = this.maininventoryService.getAllProducts(this.searchTerm);
  }

  resetForm() {
    this.newProduct = { name: '', size: '', color: '', quantity: 0, threshold: 0 };
  }
  
}
