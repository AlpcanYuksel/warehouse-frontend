import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/component/login/login.component';
import { ErrorComponent } from './core/component/error/error.component';
import { MenuComponent } from './core/component/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'menu', component: MenuComponent, 
  children: [
    { path: 'product-create', loadChildren: 
        () => import('./modules/product/product.module')
        .then(m => m.ProductModule) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
