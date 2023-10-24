import { RouterTestingHarness } from "@angular/router/testing";
import { ProductsComponent } from "./app/shop/products/products.component";

export class Card{
    public name:string = "";
    public src:string = "";
    public precio:string = "";
    public decripcion:string = "";
    public url:string = "";

    constructor(nombre:string, url:string, precio:string, descripcion:string, productUrl:string){
        this.name = nombre;
        this.src = url;
        this.precio = precio;
        this.decripcion = descripcion;
        this.url = productUrl;
    }
}
