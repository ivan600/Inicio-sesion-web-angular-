
import { Component, OnInit } from '@angular/core';
import { ready } from 'jquery';
import { ProductsComponent } from '../products/products.component';
import { Card } from 'src/card';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  OnInit(){

  }

  constructor(){
    window.addEventListener("load", ()=>{
      var boton = document.querySelector("#sc");
      var search = document.querySelector("#search") as HTMLInputElement;
      var results = document.querySelector("#results") as HTMLElement;


      if(results && search){
      search.addEventListener("input", ()=>{
         var res = search.value;
         results.innerHTML = res;
      });
      }else{
        alert("results o search null");
      }

      boton?.addEventListener("click", (i) => {
        window.scrollTo(0, 640);

      });

    });
  }


}
