import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDevelopersComponent } from './trending-developers.component';

describe('TrendingDevelopersComponent', () => {
  let component: TrendingDevelopersComponent;
  let fixture: ComponentFixture<TrendingDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
