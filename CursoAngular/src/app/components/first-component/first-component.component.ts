import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  nome = "Julio";
  idade = 19;
  profissao = "Programador Full-Stack .NET & Angular";
  hobbies = ["Estudar", "Jogar CS2", "Treinar"]

  constructor() { }

  ngOnInit(): void {
  }

}
