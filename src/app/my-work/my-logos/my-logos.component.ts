import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ImageListService } from '../imageList.service'

@Component({
  selector: 'app-my-logos',
  templateUrl: './my-logos.component.html',
  styleUrls: ['./my-logos.component.css']
})
export class MyLogosComponent implements OnInit {
  //filterImage = [];
  //type = 'logo';
  //@Output() type = new EventEmitter<string>();
  
 constructor(private imagelist: ImageListService) {}

 ngOnInit(): void {
  //this.filterImage = this.imagelist.getImages();
  //this.type.emit('logo');
  
 }

}
