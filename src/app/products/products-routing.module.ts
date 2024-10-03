import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { authGuard } from '../services/auth.guard';

const productRoutes: Routes = [
  { path: 'create-product', component: CreateProductComponent },
  { path: 'list-products', component: ViewAllProductsComponent, canActivate: [authGuard] },
  { path: 'category/:id', component: ViewAllProductsByCategoryComponent },
  { path: 'search-date/:', component: ViewAllProductsByDateComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'fork-join', component: ProductsComponent }
];
@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
