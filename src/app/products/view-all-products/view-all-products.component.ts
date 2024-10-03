import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { from, take, map, forkJoin, of, mergeMap, toArray, interval, filter, exhaustMap, concatMap, exhaustAll, switchMap, pipe, mergeAll } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrl: './view-all-products.component.css'
})
export class ViewAllProductsComponent implements OnInit {

  productlist: any;
  dataIs: any;
  dataIs2: any;

  constructor( private productsService: ProductsService, private http: HttpClient ){ }

  ngOnInit(): void {
    
    this.productsService.getAllProducts().subscribe( data => {
    this.productlist = data;
    // console.log(this.productlist);
      
  });

  const arr = interval(1).pipe(filter((val) => val > 0 ),(take(5)));
  

    arr.pipe(mergeMap(id => {
      return this.http.get(`http://localhost:3000/products/${id}`)
    })).subscribe((postDetails) => {
      console.log(postDetails);

    })

  }
    
}
