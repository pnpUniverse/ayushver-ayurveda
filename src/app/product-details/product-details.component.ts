import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  strikeCheckout:any = null;
  categoryList = [
    {
      name:'Diabetes Care',
      slug: 'diabetes_care',
      isActive: true
    },
    {
      name:'Heart Care',
      slug: 'heart_care',
      isActive: false
    },
    {
      name:'Skin Care',
      slug: 'skin_care',
      isActive: false
    },
    {
      name:'Piles Management',
      slug: 'piles_management',
      isActive: false
    },
    {
      name:'Liver Care',
      slug: 'liver_care',
      isActive: false
    },
    {
      name:'Sexual Health',
      slug: 'sexual_health',
      isActive: false
    }
  ]

  products:any = [
    {
      product_id:'1',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'<p class="ingredients">The new Madhulife formulation is even more advanced with 8Ayurvedic herbs that have been scientifically proven to help manage blood sugar levels.</p></br><p class="ingredients">Madhulife  contains ingredients like Methi and Gudmar, karela,jamun,which are known to slow down carb absorption and reduce appetite. They also help regulate blood sugar levels. Madhulife  also helps improve metabolism and counter symptoms of uncontrolled sugar levels like excessive urination, thirst, tiredness, and fatigue, thus enhancing the quality of life.</p></br><p class="ingredients">Madhulife contains Giloy and Haridra, ingredients proven to nourish and strengthen vital organs health.  Madhulife tablet is also manage the weight as well as blood sugar in the body  This Ayurvedic blood sugar regulator is made with all-natural ingredients and is not known to cause any side effects. Madhulife tablet is small in size easy to take with no bitter taste.</p>',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'500',
    }
  ];

  product: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.stripePaymentGateway();
    this.product = this.products.find( (item:any )=> {
      return ( item.category == this.activatedRoute.snapshot.params.category && item.product_id == this.activatedRoute.snapshot.params.id )
    })
  }

  checkout(amount: any) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_21dVAuoEwZGsJWJFIznHjPCt',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });
  
    strikeCheckout.open({
      name: this.product.product_name,
      description: 'Payment widgets',
      amount: +amount * 100
    });
  }
  
  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_21dVAuoEwZGsJWJFIznHjPCt',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
        
      window.document.body.appendChild(scr);
    }
  }
}
