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
      product_price:'50',
    },
    {
      product_id:'2',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'<p class="ingredients">The new Madhulife formulation is even more advanced with 8Ayurvedic herbs that have been scientifically proven to help manage blood sugar levels.</p></br><p class="ingredients">Madhulife  contains ingredients like Methi and Gudmar, karela,jamun,which are known to slow down carb absorption and reduce appetite. They also help regulate blood sugar levels. Madhulife  also helps improve metabolism and counter symptoms of uncontrolled sugar levels like excessive urination, thirst, tiredness, and fatigue, thus enhancing the quality of life.</p></br><p class="ingredients">Madhulife contains Giloy and Haridra, ingredients proven to nourish and strengthen vital organs health.  Madhulife tablet is also manage the weight as well as blood sugar in the body  This Ayurvedic blood sugar regulator is made with all-natural ingredients and is not known to cause any side effects. Madhulife tablet is small in size easy to take with no bitter taste.</p>',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'50',
    },
    {
      product_id:'3',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'<p class="ingredients">The new Madhulife formulation is even more advanced with 8Ayurvedic herbs that have been scientifically proven to help manage blood sugar levels.</p></br><p class="ingredients">Madhulife  contains ingredients like Methi and Gudmar, karela,jamun,which are known to slow down carb absorption and reduce appetite. They also help regulate blood sugar levels. Madhulife  also helps improve metabolism and counter symptoms of uncontrolled sugar levels like excessive urination, thirst, tiredness, and fatigue, thus enhancing the quality of life.</p></br><p class="ingredients">Madhulife contains Giloy and Haridra, ingredients proven to nourish and strengthen vital organs health.  Madhulife tablet is also manage the weight as well as blood sugar in the body  This Ayurvedic blood sugar regulator is made with all-natural ingredients and is not known to cause any side effects. Madhulife tablet is small in size easy to take with no bitter taste.</p>',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'50',
    },
    {
      product_id:'4',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'<p class="ingredients">The new Madhulife formulation is even more advanced with 8Ayurvedic herbs that have been scientifically proven to help manage blood sugar levels.</p></br><p class="ingredients">Madhulife  contains ingredients like Methi and Gudmar, karela,jamun,which are known to slow down carb absorption and reduce appetite. They also help regulate blood sugar levels. Madhulife  also helps improve metabolism and counter symptoms of uncontrolled sugar levels like excessive urination, thirst, tiredness, and fatigue, thus enhancing the quality of life.</p></br><p class="ingredients">Madhulife contains Giloy and Haridra, ingredients proven to nourish and strengthen vital organs health.  Madhulife tablet is also manage the weight as well as blood sugar in the body  This Ayurvedic blood sugar regulator is made with all-natural ingredients and is not known to cause any side effects. Madhulife tablet is small in size easy to take with no bitter taste.</p>',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'50',
    },
    {
      product_id:'5',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'<p class="ingredients">The new Madhulife formulation is even more advanced with 8Ayurvedic herbs that have been scientifically proven to help manage blood sugar levels.</p></br><p class="ingredients">Madhulife  contains ingredients like Methi and Gudmar, karela,jamun,which are known to slow down carb absorption and reduce appetite. They also help regulate blood sugar levels. Madhulife  also helps improve metabolism and counter symptoms of uncontrolled sugar levels like excessive urination, thirst, tiredness, and fatigue, thus enhancing the quality of life.</p></br><p class="ingredients">Madhulife contains Giloy and Haridra, ingredients proven to nourish and strengthen vital organs health.  Madhulife tablet is also manage the weight as well as blood sugar in the body  This Ayurvedic blood sugar regulator is made with all-natural ingredients and is not known to cause any side effects. Madhulife tablet is small in size easy to take with no bitter taste.</p>',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'50',
    }
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
    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
  }

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
