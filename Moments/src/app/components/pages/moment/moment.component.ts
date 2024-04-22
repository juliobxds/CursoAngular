import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MommentService } from 'src/app/services/momment.service';

import { Moment } from 'src/app/Moment';


@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  moment?: Moment;

  constructor(private mommentService: MommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.mommentService.getMoment(id)
    .subscribe((item) => (this.moment = item.data))
    
  }

}
