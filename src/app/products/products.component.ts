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
      product_price:'500',
    },
    {
      product_id:'2',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'The new Madhulife formulation is even more advanced with 8Ayurvedic herbs...',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'500',
    },
    {
      product_id:'3',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'The new Madhulife formulation is even more advanced with 8Ayurvedic herbs...',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'500',
    },
    {
      product_id:'4',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'The new Madhulife formulation is even more advanced with 8Ayurvedic herbs...',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'500',
    },
    {
      product_id:'5',
      product_name:'MadhurLife Diabetic',
      category: 'diabetes_care',
      product_description:'The new Madhulife formulation is even more advanced with 8Ayurvedic herbs...',
      product_image:'madhur_life_diabetic_1.jpg',
      product_price:'500',
    }
  ];

  selectedCategory: any;
  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(slug: any) {
    this.categoryList.map((key) => {
      if ( key.slug == slug ) {
        key.isActive = true;
      } else {
        key.isActive = false;
      }
    })

    if ( slug == 'diabetes_care') {
      this.products = [
        {
          product_id:'1',
          product_name:'MadhurLife Diabetic',
          category: 'diabetes_care',
          product_description:'The new Madhulife formulation is even more advanced with 8Ayurvedic herbs...',
          product_image:'madhur_life_diabetic_1.jpg',
          product_price:'500',
        }
      ];  
    } else {
      this.products = [];
    }

    // this.products = this.products.map((val:any)=>{
    //   return val.category == slug;
    // })
  }
  
  ngAfterViewInit() {
  }
}