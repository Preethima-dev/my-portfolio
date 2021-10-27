import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ImageListService } from '../imageList.service';

@Component({
  selector: 'app-all-designs',
  templateUrl: './all-designs.component.html',
  styleUrls: ['./all-designs.component.css']
})
export class AllDesignsComponent implements OnInit {

  @ViewChild('nav') slider: NgImageSliderComponent;
  imageObject =[];
  imageCategory : any;
  category :boolean;

  constructor(private imagelist: ImageListService){}

  ngOnInit(): void {
    const images = this.imagelist.getImages();
    this.imageCategory = this.imagelist.categoryType;
    
    if(this.imageCategory === '') {
      this.imageObject = images;
    }
    else{
       this.imageObject = this.imagelist.getImages().filter((el) => 
    {
     return el.category === this.imageCategory ? el : ''
    });
    }
    
  }
}
