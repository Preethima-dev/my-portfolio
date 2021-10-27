import { Component, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ImageListService } from './imageList.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {
  @Output() categoryName =new EventEmitter<string>();
  type: string;
    

  constructor(private router: Router,
    private route: ActivatedRoute,
    private imagelist: ImageListService){}

  ngOnInit():void{
   
    //this.imagelist.getCategory(null);
    this.router.navigate(['alldesigns'],{relativeTo: this.route});
    //this.categoryName.emit
    this.imagelist.getCategory('');
    
  }

  onAllDesign(){
    
    //this.imagelist.getCategory(null);
    this.router.navigate(['alldesigns'],{relativeTo: this.route});
    this.imagelist.getCategory('');
    

  }
  onLogos(){
    
    //this.imagelist.getCategory('logo');
    this.router.navigate(['logos'],{relativeTo: this.route});
    this.imagelist.getCategory('logo');
    
  }
  onTemplates(){
    this.router.navigate(['templates'],{relativeTo: this.route});
    this.imagelist.getCategory('template');

  }
}
