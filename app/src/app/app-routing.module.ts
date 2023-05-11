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

//CSS
import { SidebarComponent } from './sidebar/sidebar.component';
import { CssComponent } from './tutorials/css/css.component';
import { CssbasicsComponent } from './tutorials/css/cssbasics/cssbasics.component';
import { CssbackgroundComponent } from './tutorials/css/cssbackground/cssbackground.component';
import { CsstableComponent } from './tutorials/css/csstable/csstable.component';

//HTML
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { HtmlComponent } from './tutorials/html/html.component';
import { HtmlbasicsComponent } from './tutorials/html/htmlbasics/htmlbasics.component';
import { HtmlstylesComponent } from './tutorials/html/htmlstyles/htmlstyles.component';
import { HtmltableComponent } from './tutorials/html/htmltable/htmltable.component';

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

  //css routes
  {path: 'sidebar', component: SidebarComponent},
  {path: 'css', component: CssComponent},
  {path: 'cssbasics', component: CssbasicsComponent},
  {path: 'csstable', component: CsstableComponent},
  {path: 'cssbackground', component: CssbackgroundComponent},

  // html routes
  {path: 'sidebar2', component: Sidebar2Component},
  {path: 'html', component: HtmlComponent},
  {path: 'basics', component: HtmlbasicsComponent},
  {path: 'styles', component: HtmlstylesComponent},
  {path: 'table', component: HtmltableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
