import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() nome: string = '';
  @Input() userInfos!:  {email: string, role: string}
  @Input() carro!: {nome: string, ano: string}

  constructor() { }

  ngOnInit(): void {
  }

}
