import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { AppServiceService } from '../services/app-service.service';
import { combineLatest, concatMap, exhaustMap, forkJoin, from, interval, map, mergeAll, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  data: any = []
  constructor( private productService: ProductsService, private loginService: AppServiceService ) {

  }

  ngOnInit(): void {

    const login = this.loginService.getLoginData();
    const products = this.productService.getAllProducts();
    const categories = this.productService.getCategories();


    forkJoin( login, products, categories ).subscribe((res) => {
      console.log(res);
      console.log((res[1]));
      
    })
    
  }

}
