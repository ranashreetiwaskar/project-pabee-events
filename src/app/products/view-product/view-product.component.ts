import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {

  productId = 0;
  viewData: any;

  constructor( private activatedRoute: ActivatedRoute, private ProductService: ProductsService ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
      this.productId = data['id'];
      // console.log(this.productId);
    });

    this.ProductService.viewProduct(this.productId).subscribe(data => {
      this.viewData = data;
      // console.log(data);
      
    })

  }

}
