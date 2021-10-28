import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API = environment.API_URL;
  
  constructor(private httpClient: HttpClient) { }

  requestGetProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API);
  }

  requestGetProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API + `${id}`);
  }

  requestCreateProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.API, product);
  }

  requestDeleteProductById(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(this.API + `${id}`);
  }

  requestUpdateroductById(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.API, product);
  }
}
