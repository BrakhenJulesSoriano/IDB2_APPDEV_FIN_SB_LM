import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './manage/view/view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CssComponent } from './tutorials/css/css.component';
import { HtmlComponent } from './tutorials/html/html.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},

  {path: 'home', component: HomeComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'view/:id', component: ViewComponent},
  
  {path: 'sidebar', component: SidebarComponent},
  {path: 'css', component: CssComponent},
  {path: 'html', component: HtmlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
