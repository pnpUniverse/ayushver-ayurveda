import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {
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
      product_description:'The new Madhulife formulation is even more advanced with 8Ayurvedic herbs...',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'400',
    },
    {
      product_id:'2',
      product_name:'WELL HEART Powder',
      category: 'heart_care',
      product_description:'Well heart Power is a trusted supplement for cardiovascular problems...',
      product_image:'heart_care_tablet_1.jpg',
      product_price:'500',
    },
    {
      product_id:'3',
      product_name:'No-UV Creame',
      category: 'skin_care',
      product_description:'Your skin requires proper care and nourishment to look its best...',
      product_image:'skin_care_product_1.jpg',
      product_price:'500',
    },
    {
      product_id:'4',
      product_name:'Sit Easy Capsules',
      category: 'piles_management',
      product_description:'No expensive medicines, no painful surgery!...',
      product_image:'piles_care_tablet_1.jpg',
      product_price:'500',
    },
    {
      product_id:'5',
      product_name:'Liv Best Tablets',
      category: 'liver_care',
      product_description:'Ayurvedic liver therapy, Provides all round protection to liver...',
      product_image:'liver_care_tablet_1.jpg',
      product_price:'500',
    },
    {
      product_id:'6',
      product_name:'LIBIUP Capsules',
      category: 'sexual_health',
      product_description:'Testosterone is the primary sex chemical in men&#39;s bodies...',
      product_image:'sexual_health_1.jpeg',
      product_price:'500',
    }
  ];
  copiedArray = this.products.map((x:any) => Object.assign({}, x));

  selectedCategory: any;
  constructor() { }

  ngOnInit(): void {
    this.products = this.copiedArray.filter((product:any)=>{ return product.category == 'diabetes_care'})
  }

  changeCategory(slug: any) {
    this.categoryList.map((key) => {
      if ( key.slug == slug ) {
        key.isActive = true;
      } else {
        key.isActive = false;
      }
    })

    this.products = this.copiedArray.filter((product:any)=>{ return product.category == slug})
  }
  
  ngAfterViewInit() {
  }
}