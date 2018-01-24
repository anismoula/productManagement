import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product.interface'
import { ProductService } from 'app/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  _filter: string ;
  title: String = "Product List"

  get myfilter(): string {
      return this._filter;
  }

  set myfilter(value:string) {
    this._filter = value ;
    this.filtredProducts=this.myfilter ? this.performFilter(this.myfilter): this.products;
}

performFilter(filterBy:string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) ;
}

onRatingClicked (message: String) {
    this.title = "Product List" +message;
    console.log(message);
}

  filtredProducts: IProduct[];
  products: IProduct[] = [];

toggleImage(): void {
  this.showImage= !this.showImage;
}

constructor(private _productService: ProductService) {


   }


  ngOnInit() {
    this.products=this._productService.getProducts();
    this.filtredProducts = this.products ;

  }

}
