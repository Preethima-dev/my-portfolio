import { Component, Input, OnInit, ViewChild } from '@angular/core';
//import { ActivatedRoute, Router } from '@angular/router';
import { NgImageSliderComponent } from 'ng-image-slider';
import { Subscription } from 'rxjs';
import { ImageListService } from '../imageList.service';


@Component({
  selector: 'app-all-designs',
  templateUrl: './all-designs.component.html',
  styleUrls: ['./all-designs.component.css']
})
export class AllDesignsComponent implements OnInit {

  // constructor(private router: Router,
  //   private route: ActivatedRoute) { }
  @ViewChild('nav') slider: NgImageSliderComponent;
  //type = 'logo';
  imageObject =[];
  imageCategory : any;
  category :boolean;
  //supscription: Subscription;

  

  
  constructor(private imagelist: ImageListService){}

  ngOnInit(): void {
    // this.router.navigate(['/alldesigns'], {relativeTo: this.route});
    //this.imageCategory = this.imagelist.getCategory(this.type);
    //console.log(this.imagelist.categoryType);
   
      //if(this.type === '') this.category= false;
    // if(!this.category) {
    //     this.imageObject= data;
    //   }else{
    //     this.imageObject = data.filter( (el:any)=> {
    //       return el.category === this.type ? el : '';
    //   }
      
    //   );
    // }
    const images = this.imagelist.getImages();
    //console.log(images);
    this.imageCategory = this.imagelist.categoryType;
    //console.log(this.imageCategory);
    if(this.imageCategory === '') {
      this.imageObject = images;
    //console.log(this.imageObject);
    }
    else{
      //console.log(this.imageObject.map(el=> el));
      //console.log(this.imageCategory);
        this.imageObject = this.imagelist.getImages().filter((el) => 
    {
     return el.category === this.imageCategory ? el : ''
      //console.log(el);
    });
    }
    
    
    
    //console.log(this.imageObject);
   
  
    
   
  }

}
