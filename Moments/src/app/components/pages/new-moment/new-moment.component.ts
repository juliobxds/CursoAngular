import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moment';
import { MommentService } from 'src/app/services/momment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar!';

  constructor(private momentService: MommentService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    // todo

    await this.momentService.createMoment(formData).subscribe();

    // exibir msg

    // redirect

  }

}
