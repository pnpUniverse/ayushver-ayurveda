import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExternalLibraryService } from './util';
declare let Razorpay: any;
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  strikeCheckout:any = null;
  response: any;
  razorpayResponse: any;
  showModal = false;
  paymentHandler: any = null;
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
      product_name:'Madhulife Tablets',
      category: 'diabetes_care',
      product_description:'<p>The new Madhulife formulation is even more advanced with Ayurvedic herbs that have been scientifically proven to help manage blood sugar levels.</p><p>Madhulife contains ingredients like Methi and Gudmar, karela,jamun,which are known to slow down carb absorption and reduce appetite. They also help regulate blood sugar levels. Madhulife also helps improve metabolism and counter symptoms of uncontrolled sugar levels like excessive urination, thirst, tiredness, and fatigue, thus enhancing the quality of life.</p><p>Madhulife contains Giloy and Haridra, ingredients proven to nourish and strengthen vital organs health. Madhulife tablet is also manage the weight as well as blood sugar in the body This Ayurvedic blood sugar regulator is made with all-natural ingredients and is not known to cause any side effects. Madhulife tablet is small in size easy to take with no bitter taste.</p><p>Pack of 60 Tablets</p>',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'400',
      // product_price:'10'
    },
    {
      product_id:'2',
      product_name:'WELL HEART Powder',
      category: 'heart_care',
      product_description:'<p>Well heart Powder is a trusted supplement for cardiovascular problems. It helps regulate bad cholesterol in the blood and prevents plaque formation in heart arteries. It clears toxins from your system and strengthens heart muscles. It also helps any inflammation and controls angina pain.</p><p><strong>Benefits: </strong> Useful in cardiovascular diseases. It helps regulate bad cholesterol in the blood. It clears toxins from your system and strengthens heart muscles</p><p><strong>Pack of 400gm Powder</strong></p>',
      product_image:'heart_care_tablet_1.jpg',
      product_price:'500',
      // product_price:'10'
    },
    {
      product_id:'3',
      product_name:'No-UV Creame',
      category: 'skin_care',
      product_description:'<p>Your skin requires proper care and nourishment to look its best. Prolonged sun exposure, pollution and dietary negligence can cause your skin to become dull, dry, and prone to aging.</p><p>Swarnamukhi Face Cream is a potent herbal formula that alleviates various skin problems, like dryness, pigmentation, sun damage and dark spots, while restoring the natural glow.</p><p>It’s a rejuvenating &amp; brightening Ayurvedic night cream that works overnight to lighten dark spots, remove tan and enhance the complexion.</p><p>You can buy this Ayurvedic face cream from Ayushver Ayurveda and deliver it to your doorstep anywhere in India.</p><p><strong>Creame of 30 gms</strong></p>',
      product_image:'skin_care_product_1.jpg',
      product_price:'465',
      // product_price:'10'
    },
    {
      product_id:'4',
      product_name:'Sit Easy Capsules',
      category: 'piles_management',
      product_description:'<p>No expensive medicines, no painful surgery!</p><p>In case of piles, the fear of surgery usually follows and we understand that an effective treatment is the need of hour. The Tablets cures Piles, and provide relief from the pain and discomfort caused by it. Natural and formulated ayurvedically, these tablets are efficient and safe.</p><p>Ingredients of the Tablets: Arshoghani Bati, Akik Pishti, Zimikand, Nagkeshar, Shodit Phitkari, Amla Churna, Swamagairic, Mishri, Bole and Bhawana Dravya.</p><p>Benefits of the Tablets:</p><p><ul><li>Relief from constipation, itching and bleeding</li><li>Reduces piles pain and inflammation</li><li>Provides support in chronict constipation</li><li>Improves digestion</li><li>Eliminates constipation</li><li>Treats burning sensation and uneasiness</li><li>Quickly stops bleeding</li><li>Heals and shrinks the hemorrhoids</li></ul></p><p>Product Specifications:</p><p><ul><li>Net Quantity: 50 Tablets</li><li>Ayurvedic Formulation</li><li>Natural product thus usually no side effects noted</li></ul></p>',
      product_image:'piles_care_tablet_1.jpg',
      product_price:'500',
      // product_price:'10'
    },
    {
      product_id:'5',
      product_name:'Liv Best Tablets',
      category: 'liver_care',
      product_description:'<p><ul><li>Helps in liver problems As Fatty Liver -Liver Detox -Liver Cleanse</li><li>Liverguardia is a ayurvedic liver medicine that supports a healthy liver function by improving metabolic and liver health</li><li>A unique blend of over 18 vital botanicals Enriched with ayurvedic preparations.</li><li>Liverguardia is a Natural Ayurvedic Liver Protector.</li><li>Ayurvedic liver therapy, Provides all round protection to liver</li><li>Pack of 60 Tablets</li></ul></p>',
      product_image:'liver_care_tablet_1.jpg',
      product_price:'700',
      // product_price:'10'
    }
    // , {
    //   product_id:'6',
    //   product_name:'LIBIUP Capsules',
    //   category: 'sexual_health',
    //   product_description:'<p>Testosterone is the primary sex chemical in men&#39;s bodies, which assumes an indispensable part in keeping your state of mind turned on alongside improving the improvement of the body. Testosterone chemical is liable for managing sex drive, building bone mass, further developing muscle strength, and working on the creation of sperm.</p><p>Testosterone increases as men age and contacts the top when you arrive at pubescence. Tragically, the youngsters these days are confronting terrible medical problems because of low testosterone. An uncommon drop in testosterone prompts diminished drive, subsequently causing you to have a surprise and dull outlook on your relationship.</p><p>In the Indian market, you observe different testosterone promoter cases, tablets, oils, gels, and creams. In any case, every one of these testosterone supporting enhancements is stacked with destructive synthetic compounds, and they adversely influence your well-being as opposed to further developing wellbeing.</p><p>To fix the issue of low testosterone chemicals, incline toward regular testosterone supporters (Porush yovan keet containers), which generally increase wellbeing by keeping you solid and dynamic. Porush yovan keet cases (best testosterone sponsor cases) contain normal Shilajit, Safed Musli, Vidarikanda, Ashwagandha, and Kaunch beej, which usually further develop t-levels in men.</p><p><strong>Pack of 60 Capsules</strong></p>',
    //   product_image:'sexual_health_1.jpeg',
    //   product_price:'900',
    // }
  ];

  product: any;
  showSuccess:boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private razorpayService: ExternalLibraryService, private cd:  ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.product = this.products.find( (item:any )=> {
      return ( item.category == this.activatedRoute.snapshot.params.category && item.product_id == this.activatedRoute.snapshot.params.id )
    })
    this.razorpayService.lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js').subscribe();
    // this.invokeStripe();
  }

  // makePayment(amount: any) {
  //   const paymentHandler = (<any>window).StripeCheckout.configure({
  //     key: 'pk_live_51NAczrSAGdk1xPQTvycdhYDfXhM0np6fM6TtdR0lFYncDbOvNjSf2T9foMzGKvGesH7zLvEvctaDaGkfSkHN1HaD00aOqb9PXv',
  //     locale: 'auto',
  //     token: function (stripeToken: any) {
  //       console.log(stripeToken);
  //       alert('Stripe token generated!');
  //     },
  //   });
  //   paymentHandler.open({
  //     name: '',
  //     description: '',
  //     amount: amount * 100,
  //     currency: 'inr',
  //     product_data: {
  //       name: '',
  //     },
  //     phone_number_collection: {
  //       enabled: true,
  //     }
  //   });
  // }

  // invokeStripe() {
  //   if (!window.document.getElementById('stripe-script')) {
  //     const script = window.document.createElement('script');
  //     script.id = 'stripe-script';
  //     script.type = 'text/javascript';
  //     script.src = 'https://checkout.stripe.com/checkout.js';
  //     script.onload = () => {
  //       this.paymentHandler = (<any>window).StripeCheckout.configure({
  //         key: 'pk_live_51NAczrSAGdk1xPQTvycdhYDfXhM0np6fM6TtdR0lFYncDbOvNjSf2T9foMzGKvGesH7zLvEvctaDaGkfSkHN1HaD00aOqb9PXv',
  //         locale: 'auto',
  //         token: function (stripeToken: any) {
  //           console.log(stripeToken);
  //           alert('Payment has been successfull!');
  //         },
  //       });
  //     };
  //     window.document.body.appendChild(script);
  //   }
  // }

  RAZORPAY_OPTIONS = {
    "key": "rzp_test_Ksfw25cqP81RBh",
    "amount": "",
    "name": "",
    "order_id": "",
    "description": "Load Wallet",
    "image": "https://livestatic.novopay.in/resources/img/nodeapp/img/Logo_NP.jpg",
    "prefill": {
      "name": "",
      "email": "",
      "contact": "",
      "method": ""
    },
    "modal": {},
    'handler': {},
    "theme": {
      "color": "#0096C5"
    }
  };

  public proceed() {
    this.RAZORPAY_OPTIONS.amount = this.product.product_price + '00';

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response: any) {
    console.log(response);
    this.razorpayResponse = `Razorpay Response`;
    this.showModal = true;
    this.cd.detectChanges()
    // if(document.getElementById('razorpay-response')) {
    //   document.getElementById('razorpay-response').style.display = 'block';
    // }
  }

  public test() {
    // if(document.getElementById('razorpay-response')) {
    //   document.getElementById('response-modal').style.display = 'block';
    // }
    this.response = `dummy text`;
  }
}
