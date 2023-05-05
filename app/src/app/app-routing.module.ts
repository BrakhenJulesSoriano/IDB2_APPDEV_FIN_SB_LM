import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CssComponent } from './tutorials/css/css.component';
import { HtmlComponent } from './tutorials/html/html.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './manage/add/add.component';
import { UpdateComponent } from './manage/update/update.component';
import { DeleteComponent } from './manage/delete/delete.component';
import { ViewComponent } from './manage/view/view.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'css', component: CssComponent},
  {path: 'html', component: HtmlComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'user', component: UserDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
