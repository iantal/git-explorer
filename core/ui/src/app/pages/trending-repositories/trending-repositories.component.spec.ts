import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingRepositoriesComponent } from './trending-repositories.component';

describe('TrendingRepositoriesComponent', () => {
  let component: TrendingRepositoriesComponent;
  let fixture: ComponentFixture<TrendingRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
