import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  value = 'Clear me';

  person = {
    fName: "Israel",
    lName: "Rodrigues",
    age: 22,
    address: "Rua Pastor Rodolfo"
  }

  constructor() { }

  ngOnInit() {
  }

}
