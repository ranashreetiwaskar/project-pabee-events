import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormGroup, FormBuilder, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  myForm: FormGroup;

  constructor( private productsService: ProductsService, private fb: FormBuilder ) { 

      this.myForm = this.fb.group({
          id: 10,
          category_id: ['', Validators.required], 
          productName: ['', Validators.required],
          description: ['', Validators.required],
          // rating: form.value.product_rating,
          price: [''],
          // product_image: '',
          // is_available: 1,
          // color: form.value.product_color,
          reviews: ['', Validators.required]
      });
  
      
  
      // console.log(newProduct);
  
      

    }
    onSubmit() {
      if (this.myForm.valid) {
        console.log('Form Submitted!', this.myForm.value);
        this.productsService.createProduct(this.myForm).subscribe(data => {
          console.log(data);
      });
      }
    }
  }
