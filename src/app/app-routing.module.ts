import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: BodyComponent },  // default route
  { path: 'products', component: ProductComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'disabled',  // 👈 Auto scroll to top
      anchorScrolling: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
