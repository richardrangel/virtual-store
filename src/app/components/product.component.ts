import { Component } from "@angular/core";

import { Product } from "../product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html"
})
export class ProductComponent {
  product: Product = {
    id: "1",
    image: "assets/images/3dPrinter.png",
    title: "3D Pritner",
    price: 10000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  };
}
