import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  apiUrl = 'https://localhost:44381/api/';
  
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newpath=this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newpath);
  }
  getProductsByCategory(categoryId:number): Observable<ListResponseModel<Product>> {
    let newpath=this.apiUrl+"products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newpath);
  }
}
