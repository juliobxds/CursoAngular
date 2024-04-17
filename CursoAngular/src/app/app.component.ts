import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Atala_thp";
  userInfos = {
    email: 'atalavitora03@gmail.com',
    role: 'Concurseira',
  };
  carro = {nome: 'Fiat Uno', ano: '2016'}

  title = 'CursoAngular';
}
