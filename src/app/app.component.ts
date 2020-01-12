import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'virtual-store';

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/3dPrinter.png',
      title: '3D Printer',
      price: 10000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: '2',
      image: 'assets/images/drone.png',
      title: 'Drone',
      price: 10000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: '3',
      image: 'assets/images/futureCar.png',
      title: 'Future Car',
      price: 10000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: '4',
      image: 'assets/images/futureCar2.png',
      title: 'Future Car II',
      price: 10000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: '5',
      image: 'assets/images/robot.png',
      title: 'Robot',
      price: 10000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      id: '6',
      image: 'assets/images/rvGlasses.png',
      title: 'RV Glasses',
      price: 10000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  ];

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
