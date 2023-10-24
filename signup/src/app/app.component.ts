
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Golden Time';

  constructor(private router: Router, private route: ActivatedRoute) {
    var aUrl = this.router.url;

   }

  ngOnInit(): void {
    //alert(this.router.url); // Imprime la ruta actual en la consola // Imprime la ruta activa actual en la consola
  }
}
