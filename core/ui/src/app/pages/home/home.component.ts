import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrendingRepositoriesService} from "../../services/trendingRepositories.service";
import {TrendingRepositories} from "../../components/TrendingRepositories";
import {LazyLoadEvent} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  totalTrendingRepositories: TrendingRepositories[];
  pageTrendingRepositories: TrendingRepositories[];
  loading: boolean = false;
  trendingRepositoriesColumns: Array<any> = [];
  totalNumberOfTrendingRepositories: number;

  constructor(private translate: TranslateService, private trendingRepositoriesService: TrendingRepositoriesService) {

  }

  getTrendingRepositories(event: LazyLoadEvent) {
    this.loading = true;
    this.trendingRepositoriesService.getAllTrendingRepositories().then((result) => {
      this.totalTrendingRepositories = result;
      this.pageTrendingRepositories = result.slice(event.first, (event.first + event.rows));
      console.log("Home component:");
      console.log(result)
      console.log(this.pageTrendingRepositories);
      this.totalNumberOfTrendingRepositories = this.totalTrendingRepositories.length;
      this.loading = false;
    }).catch((error) => {
      console.error(error);
    });
    this.loading = false;
  }

  loadTrendingRepositoriesLazy(event: LazyLoadEvent) {
    this.loading = true;
    this.getTrendingRepositories(event);
    this.loading = false;
  }

}
