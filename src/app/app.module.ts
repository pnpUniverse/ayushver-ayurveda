import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { RefundCancellationPolicyComponent } from './refund-cancellation-policy/refund-cancellation-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    ProductsComponent,
    AboutusComponent,
    HeaderComponent,
    RefundCancellationPolicyComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
