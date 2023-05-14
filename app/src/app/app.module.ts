import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CssComponent } from './tutorials/css/css.component';
import { HtmlComponent } from './tutorials/html/html.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ManageComponent } from './manage/manage.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { HtmlbasicsComponent } from './tutorials/html/htmlbasics/htmlbasics.component';
import { HtmlstylesComponent } from './tutorials/html/htmlstyles/htmlstyles.component';
import { HtmltableComponent } from './tutorials/html/htmltable/htmltable.component';
import { CssbasicsComponent } from './tutorials/css/cssbasics/cssbasics.component';
import { CssbackgroundComponent } from './tutorials/css/cssbackground/cssbackground.component';
import { CsstableComponent } from './tutorials/css/csstable/csstable.component';
import { ViewComponent } from './manage/view/view.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    SidebarComponent,
    GalleryComponent,
    CarouselComponent,
    CssComponent,
    HtmlComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    ManageComponent,
    Sidebar2Component,
    HtmlbasicsComponent,
    HtmlstylesComponent,
    HtmltableComponent,
    CssbasicsComponent,
    CssbackgroundComponent,
    CsstableComponent,
    ViewComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightgalleryModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
