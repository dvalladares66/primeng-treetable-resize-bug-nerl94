import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

export interface Car {
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  cars: Car[];
  treeValue: TreeNode[];
  cols: any[];
  frozenCols: any[];

  constructor() { }

  ngOnInit() {

      this.cars = [
        {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"}
      ];

      for(let i = 0; i< 100; i++) {
        this.cars.push({
          brand: "Test",
          year: 1234,
          color: "Red",
          vin: "asdeasd"
        });
      }
      
      const root = {
            data: {vin: 'GROUP'},
            children: this.cars.map( c => {
              return {
                data: c,
                children: []
              };
            })           
      };

      this.treeValue = [root];

      this.frozenCols = [{ field: 'vin', header: 'Vin'}];

      this.cols = [        
        { field: 'year', header: 'Year', width: '150px' },
        { field: 'brand', header: 'Brand', width: '150px' },
        { field: 'color', header: 'Color', width: '150px' }
      ];
  }
}
