import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
{path:'navbar', component:NavBarComponent},
{path:'productos', component:ProductListComponent},
{path:'', component:HomeComponent},
{path:'contactos', component: ContactComponent},
{path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
