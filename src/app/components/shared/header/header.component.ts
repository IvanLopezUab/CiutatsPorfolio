import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  buscarTexto(texto: String){
    
    if (texto.length > 2) {
      this.route.navigate(['buscar', texto]);
    } else {
      alert('Cantidad Minina de caracteres para realizar la busqueda es de 3')
    }
  }

  resertBusqueda(){
    this.route.navigate(['porfolio']);
  }


}
