import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()

export class ImageListService{

    //private imageCopy = new Subject<Array<object>>();
    public categoryType :string;
    public imageList = new Subject<any>();
    //public ImageType= new Subject<string>();

    imageObject= [
  {
    image: 'assets/images/template/chatapp.jpg',
    thumbImage: 'assets/images/template/chatapp.jpg',
    alt: 'Chat App',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/Dashboard.png',
    thumbImage: 'assets/images/template/Dashboard.png',
    alt: 'MTI Dashboard',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/jatadhari.jpg',
    thumbImage: 'assets/images/template/jatadhari.jpg',
    alt: 'Jatadhari',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/secureme-layout.jpg',
    thumbImage: 'assets/images/template/secureme-layout.jpg',
    alt: 'Secure Me',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/Family Linker.jpg',
    thumbImage: 'assets/images/template/Family Linker.jpg',
    alt: 'Family Linker',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/Form page.jpg',
    thumbImage: 'assets/images/template/Form page.jpg',
    alt: 'UniTalent Form',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/Jatadhari-1.jpg',
    thumbImage: 'assets/images/template/Jatadhari-1.jpg',
    alt: 'Jatadhari',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/Listing Page.jpg',
    thumbImage: 'assets/images/template/Listing Page.jpg',
    alt: 'UniTalent List',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/Login  screen.jpg',
    thumbImage: 'assets/images/template/Login  screen.jpg',
    alt: 'UniTalent Login',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/psp-layout.jpg',
    thumbImage: 'assets/images/template/psp-layout.jpg',
    alt: 'alt of image',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/softsages.jpg',
    thumbImage: 'assets/images/template/softsages.jpg',
    alt: 'Softsages',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/softsages-option.jpg',
    thumbImage: 'assets/images/template/softsages-option.jpg',
    alt: 'Softsages',
    category: 'template'
    //title: 'title of image',
  },
  {
    image: 'assets/images/template/patronsetech.jpg',
    thumbImage: 'assets/images/template/patronsetech.jpg',
    alt: 'PatronsEtech',
    category: 'template'
    //title: 'title of image',
  },
    {
        image: 'assets/images/logos/ver_foundation_opt2.JPG',
        thumbImage: 'assets/images/logos/ver_foundation_opt2.JPG',
        alt: 'Ver Foundation',
        category:'logo'
        //title: 'title of image',
      }, 
      {
        image: 'assets/images/logos/Taxi App.jpg',
        thumbImage: 'assets/images/logos/Taxi App.jpg',
        alt: 'Taxi App',
        category:'logo'
        //title: 'title of image',
      },
      {
        image: 'assets/images/logos/Effiel view-1.jpg',
        thumbImage: 'assets/images/logos/Effiel view-1.jpg',
        alt: 'Eiffel View',
        category:'logo'
        //title: 'title of image',
      },
      {
        image: 'assets/images/logos/Eiffel view-2.jpg',
        thumbImage: 'assets/images/logos/Eiffel view-2.jpg',
        alt: 'Eiffel View',
        category:'logo'
        //title: 'title of image',
      },
      {
        image: 'assets/images/logos/logo-1.png',
        thumbImage: 'assets/images/logos/logo-1.png',
        alt: 'Softsages',
        category:'logo'
        //title: 'title of image',
      },
      {
        image: 'assets/images/logos/logo-2.png',
        thumbImage: 'assets/images/logos/logo-2.png',
        alt: 'Softsages',
        category:'logo'
        //title: 'title of image',
      },
      {
        image: 'assets/images/logos/logo-3-final.png',
        thumbImage: 'assets/images/logos/logo-3-final.png',
        alt: 'Softsages',
        category:'logo'
        //title: 'title of image',
      },
      {
        image: 'assets/images/logos/logo4.png',
        thumbImage: 'assets/images/logos/logo4.png',
        alt: 'Softsages',
        category:'logo'
        //title: 'title of image',
      },
      {
        image: 'assets/images/logos/option4.png',
        thumbImage: 'assets/images/logos/option4.png',
        alt: 'Softsages',
        category:'logo'
        //title: 'title of image',
      },
      {
        image: 'assets/images/logos/option5.png',
        thumbImage: 'assets/images/logos/option5.png',
        alt: 'alt of image',
        category:'logo'
        //title: 'title of image',
      },
     {
       image: 'assets/images/logos/option9.png',
       thumbImage: 'assets/images/logos/option9.png',
       alt: 'alt of image',
       //title: 'title of image',
       category:'logo'
     },
     {
       image: 'assets/images/logos/Softsages.png',
       thumbImage: 'assets/images/logos/Softsages.png',
       alt: 'Softsages',
       //title: 'title of image',
       category:'logo'
     },
     {
       image: 'assets/images/logos/dmp.jpg',
       thumbImage: 'assets/images/logos/dmp.jpg',
       alt: 'DMP',
       //title: 'title of image',
       category:'logo'
     },
     {
       image: 'assets/images/logos/ar-package.jpg',
       thumbImage: 'assets/images/logos/ar-package.jpg',
       alt: 'Ar Package',
       category:'logo'
       //title: 'title of image',
     },
     {
       image: 'assets/images/logos/patrons-etech.jpg',
       thumbImage: 'assets/images/logos/patrons-etech.jpg',
       alt: 'Patrons Etech',
       //title: 'title of image',
       category:'logo'
     }    
     ];

     getImages(){
         //this.imageCopy: Object[] = this.imageObject.slice();
         return this.imageObject.slice();
     }

     getCategory(type:string){
        //console.log(type);
        return this.categoryType = type;
        //this.categoryType = type;
        //console.log(this.categoryType.next(type));
        //this.ImageType = this.categoryType;
       /*this.imageObject.filter(el =>{
           el.category === type 
           this.imageList.next(el);
       })*/

         //this.categoryType.emit(this.imageObject.slice());
         //console.log(this.categoryType);
         
         
     }
}
/*
{
    image: 'assets/images/logos/ver_foundation_opt2.JPG',
    thumbImage: 'assets/images/logos/ver_foundation_opt2.JPG',
    alt: 'alt of image',
    //title: 'title of image',
 }, 
 {
   image: 'assets/images/logos/Taxi App.jpg',
   thumbImage: 'assets/images/logos/Taxi App.jpg',
   alt: 'alt of image',
   //title: 'title of image',
 },
 {
   image: 'assets/images/logos/Effiel view-1.jpg',
   thumbImage: 'assets/images/logos/Effiel view-1.jpg',
   alt: 'alt of image',
   //title: 'title of image',
 },
 {
   image: 'assets/images/logos/Eiffel view-2.jpg',
   thumbImage: 'assets/images/logos/Eiffel view-2.jpg',
   alt: 'alt of image',
   title: 'title of image',
 },
 {
   image: 'assets/images/logos/logo-1.png',
   thumbImage: 'assets/images/logos/logo-1.png',
   alt: 'alt of image',
   //title: 'title of image',
 },
 {
   image: 'assets/images/logos/logo-2.png',
   thumbImage: 'assets/images/logos/logo-2.png',
   alt: 'alt of image',
   //title: 'title of image',
 },
 {
   image: 'assets/images/logos/logo-3-final.png',
   thumbImage: 'assets/images/logos/logo-3-final.png',
   alt: 'alt of image',
   //title: 'title of image',
 },
 {
   image: 'assets/images/logos/logo4.png',
   thumbImage: 'assets/images/logos/logo4.png',
   alt: 'alt of image',
   //title: 'title of image',
 },
 {
   image: 'assets/images/logos/option4.png',
   thumbImage: 'assets/images/logos/option4.png',
   alt: 'alt of image',
   //title: 'title of image',
 },
 {
   image: 'assets/images/logos/option5.png',
   thumbImage: 'assets/images/logos/option5.png',
   alt: 'alt of image',
   //title: 'title of image',
 },*/