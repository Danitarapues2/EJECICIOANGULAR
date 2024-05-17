import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContacComponent } from './contac/contac.component';
import { ErrorComponent } from './error/error.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: HomeComponent },
  { path: 'contactos', component: ContacComponent },
  { path: 'maquillaje', component:ProductListComponent  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
