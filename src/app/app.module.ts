import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { NgImageSliderModule } from 'ng-image-slider';
import { MyLogosComponent } from './my-work/my-logos/my-logos.component';
import { MyTemplatesComponent } from './my-work/my-templates/my-templates.component';
import { AllDesignsComponent } from './my-work/all-designs/all-designs.component';
import { ImageListService } from './my-work/imageList.service';
import { ImageFilterPipe } from './my-work/imageFilter.pipe'
//import { DesignHeaderComponent } from './my-work/design-header/design-header.component';


const appRoutes: Routes = [
  {path: '',component:WelcomeComponent, pathMatch: 'full'},
  {path:'mywork', component:MyWorkComponent, children: [
    {path:'alldesigns', component:AllDesignsComponent},
    {path: 'logos', component:MyLogosComponent},
    {path: 'templates', component:MyTemplatesComponent},
  ]}  
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MyWorkComponent,
    MyLogosComponent,
    MyTemplatesComponent,
    AllDesignsComponent,
    ImageFilterPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [ImageListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
