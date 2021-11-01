import { Component, EventEmitter, Output, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageListService } from './imageList.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css']
})
export class MyWorkComponent implements OnInit {
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private imagelist: ImageListService){}

  ngOnInit():void{
    this.router.navigate(['alldesigns'],{relativeTo: this.route});
    this.imagelist.getCategory('');    
  }

  onAllDesign(){
    this.router.navigate(['alldesigns'],{relativeTo: this.route});
    this.imagelist.getCategory('');
  }

  onLogos(){
    this.router.navigate(['logos'],{relativeTo: this.route});
    this.imagelist.getCategory('logo');
   }

  onTemplates(){
    this.router.navigate(['templates'],{relativeTo: this.route});
    this.imagelist.getCategory('template');
  }

  onLiveWebsites(){
    this.router.navigate(['livewebsites'],{relativeTo: this.route});
  }
}
