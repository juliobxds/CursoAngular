import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moment';

import { MommentService } from 'src/app/services/momment.service';

import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = []
  moments: Moment[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private mommentService: MommentService) { }

  ngOnInit(): void {
    this.mommentService.getMoments().subscribe((items)=> {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });

      this.allMoments = data;
      this.moments = data;
    });

  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value); 
    });

  }

}
