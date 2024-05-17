import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    console.log("Maquillaje")
   }
   getTelefonos() {
    return ['labial', 'rimel', 'delineador']
   }
}

