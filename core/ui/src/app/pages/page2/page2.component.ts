import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrendingRepositoriesService} from "../../services/trendingRepositories.service";

@Component({
  selector: 'app-lines',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  field1: string[];
  field2: string[];
  field3: string;

  constructor(private router: Router, private route: ActivatedRoute, private service1: TrendingRepositoriesService) {
  }

  ngOnInit() {
    this.field1 = new Array();
  }

  navigateMethod1(parameter1: string) {
    this.router.navigate(['/page1/' + parameter1]).then(r => console.log(r));
  }
}
