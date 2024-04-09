import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {

    professores : any[] = [
      {"nome": "Marion", "favorito": true},
      {"nome": "Adriano", "favorito": true},
      {"nome": "Edson", "favorito": true},
      {"nome": "Daniela", "favorito": true}
    ]
}
