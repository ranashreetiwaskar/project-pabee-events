import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Category } from './../site-framework/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private httpClient: HttpClient ) { }


  
  getAllProducts(): Observable<Product>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'applications/json')
    headers = headers.append('Content-Type', 'text/html')
    const productUrl = 'http://localhost:3000/products';
    
    return this.httpClient.get<Product>(productUrl,{headers: headers}
    ); //return an Observable
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  createProduct(productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    
    return this.httpClient.post<Product>(productUrl, productBody); //return an Observable
  }

  viewProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;

    return this.httpClient.get<Product>(productUrl); //return an Observable
  }

  updateProduct(productBody: any, productId: any): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/'+productId;

    return this.httpClient.put<Product>(productUrl, productBody); //return an Observable
  }

  deleteProduct(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;

    return this.httpClient.delete<Product>(productUrl); //return an Observable
  }

  searchCategoryProducts(categoryId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products?category_id='+categoryId;

    return this.httpClient.get<Product>(productUrl); //return an Observable
  }

  searchDateProducts(dateParam: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParam;

    return this.httpClient.get<Product>(productUrl); //return an Observable
  }
}
