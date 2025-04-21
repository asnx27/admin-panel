import { Injectable, signal, computed } from '@angular/core';
import { PRODUCTS } from './products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = signal(PRODUCTS);

  allProducts = computed(() => this.products());
  availableProducts = computed(() =>
    this.products().filter((p) => p.status === 'available')
  );

  getProduct(id: number) {
    return this.products().find((product) => product.id === id);
  }

  addProduct(product: any) {
    const updated = [...this.products(), product];
    this.products.set(updated);
  }

  updateProduct(id: number, updatedProduct: any) {
    this.products.set(
      this.products().map((p) =>
        p.id === id ? { ...p, ...updatedProduct } : p
      )
    );
  }

  softDeleteProduct(id: number) {
    this.updateProduct(id, { status: 'archived' });
  }
}
