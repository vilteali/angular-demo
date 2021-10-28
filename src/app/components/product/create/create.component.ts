import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  id!: number;
  createProductForm!: FormGroup;

  constructor(
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: SpinnerService) { }

  createProduct() {
    this.spinner.changeText$.next("Creating product...")
    const product = new Product(this.id, this.createProductForm.get('name')?.value, this.createProductForm.get('price')?.value);
    
    this.productService.requestCreateProduct(product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }


  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.queryParams['id']+1;
    this.createProductForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?')])
    });
  }
}