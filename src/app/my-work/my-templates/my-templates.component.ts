import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-my-templates',
  templateUrl: './my-templates.component.html',
  styleUrls: ['./my-templates.component.css']
})
export class MyTemplatesComponent implements OnInit {

  //@ViewChild('nav') slider: NgImageSliderComponent;

  imageObject: Array<object> = [
];
 constructor() { }

 ngOnInit(): void {
   
 }

}
