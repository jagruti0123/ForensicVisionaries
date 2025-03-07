import { Component } from '@angular/core';
import { MaininventoryService } from '../maininventory.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-jkgarments',
  templateUrl: './jkgarments.component.html',
  styleUrl: './jkgarments.component.css'
})
export class JKGarmentsComponent {

  searchTerm: string = '';
  filteredProducts: Product[] = [];
  isModalOpen: boolean = false;
  bookingQuantity: number = 1;
  bookingSize: string = '';
  bookingColor: string = '';
  selectedProduct: Product | undefined = undefined;

  constructor(private maininventoryService: MaininventoryService) {}

  searchProduct() {
    // Get all products matching the search term
    this.filteredProducts = this.maininventoryService.getAllProducts(this.searchTerm);
  }

  toggleModal(product?: Product) {
    this.isModalOpen = !this.isModalOpen;
    this.selectedProduct = product;
    if (product) {
      this.bookingSize = product.size;
      this.bookingColor = product.color;
    }
  }

  submitBooking() {
    if (this.selectedProduct && this.bookingQuantity > 0) {
      // Update the product quantity based on name, size, and color
      this.maininventoryService.updateProductQuantity(this.selectedProduct.name, this.bookingSize, this.bookingColor, -this.bookingQuantity);
      this.toggleModal();  // Close the modal after submitting
      this.searchProduct();  // Refresh the product details
    }
  }
}
