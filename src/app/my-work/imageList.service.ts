import { Injectable } from "@angular/core";

@Injectable()

export class ImageListService{

  public categoryType :string;
  
  imageObject= [
    {
      image: 'assets/images/template/patronsetech.jpg',
      thumbImage: 'assets/images/template/patronsetech.jpg',
      alt: 'PatronsEtech',
      category: 'template'
    },
    {
      image: 'assets/images/template/softsages.jpg',
      thumbImage: 'assets/images/template/softsages.jpg',
      alt: 'Softsages',
      category: 'template'
    },
    {
      image: 'assets/images/template/softsages-option.jpg',
      thumbImage: 'assets/images/template/softsages-option.jpg',
      alt: 'Softsages',
      category: 'template'
    },
    {
      image: 'assets/images/template/jatadhari.jpg',
      thumbImage: 'assets/images/template/jatadhari.jpg',
      alt: 'Jatadhari',
      category: 'template'
    },
    {
      image: 'assets/images/template/Family Linker.jpg',
      thumbImage: 'assets/images/template/Family Linker.jpg',
      alt: 'Family Linker',
      category: 'template'
    },
    {
      image: 'assets/images/template/Jatadhari-1.jpg',
      thumbImage: 'assets/images/template/Jatadhari-1.jpg',
      alt: 'Jatadhari',
      category: 'template'
    },
    {
      image: 'assets/images/template/psp-layout.jpg',
      thumbImage: 'assets/images/template/psp-layout.jpg',
      alt: 'alt of image',
      category: 'template'
    },
    {
      image: 'assets/images/template/chatapp.jpg',
      thumbImage: 'assets/images/template/chatapp.jpg',
      alt: 'Chat App',
      category: 'template'
    },
    {
      image: 'assets/images/template/Dashboard.png',
      thumbImage: 'assets/images/template/Dashboard.png',
      alt: 'MTI Dashboard',
      category: 'template'
    },    
    {
      image: 'assets/images/template/secureme-layout.jpg',
      thumbImage: 'assets/images/template/secureme-layout.jpg',
      alt: 'Secure Me',
      category: 'template'
    },    
    {
      image: 'assets/images/template/Form page.jpg',
      thumbImage: 'assets/images/template/Form page.jpg',
      alt: 'UniTalent Form',
      category: 'template'
    },    
    {
      image: 'assets/images/template/Listing Page.jpg',
      thumbImage: 'assets/images/template/Listing Page.jpg',
      alt: 'UniTalent List',
      category: 'template'
    },
    {
      image: 'assets/images/template/Login  screen.jpg',
      thumbImage: 'assets/images/template/Login  screen.jpg',
      alt: 'UniTalent Login',
      category: 'template'
    },
    {
      image: 'assets/images/logos/ver_foundation_opt2.JPG',
      thumbImage: 'assets/images/logos/ver_foundation_opt2.JPG',
      alt: 'Ver Foundation',
      category:'logo'
    }, 
    {
      image: 'assets/images/logos/Taxi App.jpg',
      thumbImage: 'assets/images/logos/Taxi App.jpg',
      alt: 'Taxi App',
      category:'logo'
    },
    {
      image: 'assets/images/logos/Effiel view-1.jpg',
      thumbImage: 'assets/images/logos/Effiel view-1.jpg',
      alt: 'Eiffel View',
      category:'logo'
    },
    {
      image: 'assets/images/logos/Eiffel view-2.jpg',
      thumbImage: 'assets/images/logos/Eiffel view-2.jpg',
      alt: 'Eiffel View',
      category:'logo'
    },
    {
      image: 'assets/images/logos/logo-1.png',
      thumbImage: 'assets/images/logos/logo-1.png',
      alt: 'Softsages',
      category:'logo'
    },
    {
      image: 'assets/images/logos/logo-2.png',
      thumbImage: 'assets/images/logos/logo-2.png',
      alt: 'Softsages',
      category:'logo'
    },
    {
      image: 'assets/images/logos/logo-3-final.png',
      thumbImage: 'assets/images/logos/logo-3-final.png',
      alt: 'Softsages',
      category:'logo'
    },
    {
      image: 'assets/images/logos/logo4.png',
      thumbImage: 'assets/images/logos/logo4.png',
      alt: 'Softsages',
      category:'logo'
    },
    {
      image: 'assets/images/logos/option4.png',
      thumbImage: 'assets/images/logos/option4.png',
      alt: 'Softsages',
      category:'logo'
    },
    {
      image: 'assets/images/logos/option5.png',
      thumbImage: 'assets/images/logos/option5.png',
      alt: 'alt of image',
      category:'logo'
    },
    {
      image: 'assets/images/logos/option9.png',
      thumbImage: 'assets/images/logos/option9.png',
      alt: 'alt of image',
      category:'logo'
    },
    {
      image: 'assets/images/logos/Softsages.png',
      thumbImage: 'assets/images/logos/Softsages.png',
      alt: 'Softsages',
      category:'logo'
    },
    {
      image: 'assets/images/logos/dmp.jpg',
      thumbImage: 'assets/images/logos/dmp.jpg',
      alt: 'DMP',
      category:'logo'
    },
    {
      image: 'assets/images/logos/ar-package.jpg',
      thumbImage: 'assets/images/logos/ar-package.jpg',
      alt: 'Ar Package',
      category:'logo'
    },
    {
      image: 'assets/images/logos/patrons-etech.jpg',
      thumbImage: 'assets/images/logos/patrons-etech.jpg',
      alt: 'Patrons Etech',
      category:'logo'
    },
      
  ];

  getImages(){
      return this.imageObject.slice();
  }

  getCategory(type:string){       
    return this.categoryType = type;
  }
}
