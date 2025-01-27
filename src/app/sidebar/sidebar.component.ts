// src/app/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar">
      <div class="search">
        <input type="text" placeholder="Search by Product name, Generic, Barcode no">
      </div>
      <div class="categories">
        <div class="category">All medicine</div>
      </div>
      <div class="products">
        <div class="product" *ngFor="let product of products">
          {{ product.name }} - {{ product.stock }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      background-color: #f8f9fa;
      padding: 10px;
    }

    .sidebar .search {
      margin-bottom: 20px;
    }

    .sidebar .categories {
      margin-bottom: 20px;
    }

    .sidebar .products {
      display: flex;
      flex-direction: column;
    }

    .sidebar .product {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ddd;
    }
  `]
})
export class SidebarComponent {
  products = [
    { name: 'Paracetamol 500Mg', stock: 150, price: 180 },
    { name: 'Paracetamol 500Mg', stock: 150, price: 180 },
    { name: 'Paracetamol 500Mg', stock: 150, price: 180 },
    // Add more products as needed
  ];
}
