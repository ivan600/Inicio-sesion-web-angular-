import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  OnInit(){

  }

  constructor(){

    window.addEventListener("load", ()=>{
      const singupBtn = document.querySelector("#signup");
      if(singupBtn != null){
        singupBtn.addEventListener("click", (i)=>{
          window.scrollTo(0, 2000);
        });
      }

    });

    window.addEventListener("scroll", () =>{
      const header = document.querySelector("header");
      const nav = document.querySelectorAll(".text");

      if(header != null){
        if(window.scrollY >= 640){
          header.style.backgroundColor = "#00931F";
          if(nav != null){
            nav.forEach( a => {
              var e = a as HTMLElement;
              e.style.color = "white";
            });
          }
        }else{
          header.style.backgroundColor = "white";
          if(nav != null){
            nav.forEach( a => {
              var e = a as HTMLElement;
              e.style.color = "black";
            });
          }
        }
      }

    });
  }
}
