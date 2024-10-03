import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-utility/signin/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './login-utility/signup/signup.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ViewAllProductsComponent } from './products/view-all-products/view-all-products.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { authGuard } from './services/auth.guard';

const appRoutes: Routes = [{ path: '', redirectTo:'/log-in', pathMatch: 'full' },
  { path:'log-in', component: LoginComponent },
  { path:'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path:'sign-up', component: SignupComponent },
  { path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), canActivate: [authGuard]},
  { path: 'orders', component: ListOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

