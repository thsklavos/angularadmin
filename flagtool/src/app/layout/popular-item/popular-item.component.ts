import { Component, OnInit } from '@angular/core';

import { MainService } from '../main.service';
import { Flag} from '../model';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.css']
})
export class PopularItemComponent implements OnInit {
  flags: Array<Flag> = [];


  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getPopularPhotos();
  }

  getPopularPhotos() {
    this.mainService.getFlags().subscribe(res => {
     let data=res;
console.log(data);
this.flags=data;



    }, error => {
      console.log(error);
    });
  }




}
