import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxValidator, MinValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  product!: Product;
  editProductForm!: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  processForm() {
    this.product.name = this.editProductForm.get('name')?.value;
    this.product.price = this.editProductForm.get('price')?.value;

    this.productService.requestCreateProduct(this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(product => {
      this.product = new Product(product.id, product.name, product.price);
      this.editProductForm = this.formBuilder.group({
        name: new FormControl(product.name, Validators.required),
        price: new FormControl(product.price, [Validators.required, Validators.pattern('^\\d{0,10}$')])
      });
    });
  }

  resetForm() {
    this.productService.requestGetProductById(this.product.id).subscribe((product: Product) => {
      this.editProductForm.get('name')?.setValue(product.name);
      this.editProductForm.get('price')?.setValue(product.price);
    })
  }
}