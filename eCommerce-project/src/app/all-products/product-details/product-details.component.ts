import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  // painting: Product[] | undefined;
  painting!: Product;
  paintingId!: Number | string;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.ngOnInIt();
  }

  ngOnInIt(): void {
    this.route.params.subscribe((params) => {
      this.paintingId = params['id'];
    });
    this.getPaintingDetail();
  }

  getPaintingDetail() {
    this.productsService.getPainting(this.paintingId).subscribe((result) => {
      this.painting = result;
    });
  }
}
