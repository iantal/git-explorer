import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  images: any[] = [];
  selectedPage: any;
  booleanValue: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  exitFullScreen() {
    this.booleanValue = false;
  }

  showAnotherPage(index: number) {
    this.selectedPage = this.images[index];
  }
}

