import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrl: './view-all-products-by-category.component.css'
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  searchCategory: any;
  categoryList: any;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductsService ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data => {
      this.searchCategory = data["id"];
      console.log(this.searchCategory);



      this.productService.searchCategoryProducts(this.searchCategory).subscribe(categoryData => {
        console.log(categoryData);
        this.categoryList = categoryData;
        

      })
    })
  }

}
