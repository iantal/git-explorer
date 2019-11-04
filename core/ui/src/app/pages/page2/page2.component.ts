import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Service1Service} from "../../services/service1.service";

@Component({
  selector: 'app-lines',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  field1: string[];
  field2: string[];
  field3: string;

  constructor(private router: Router, private route: ActivatedRoute, private service1: Service1Service) {
  }

  ngOnInit() {
    this.field1 = new Array();
  }

  method1(parameter1: string) {
    console.log(parameter1);
    this.service1.getMethod1(this.field3).then(response => {
      this.field2 = response.data;
    });
  }

  navigateMethod1(parameter1: string) {
    this.router.navigate(['/page1/' + parameter1]).then(r => console.log(r));
  }
}
