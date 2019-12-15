import { Component, OnInit } from '@angular/core';
import {TrendingRepositoriesService} from "../../services/trendingRepositories.service";
import {TrendingRepositories} from "../../components/TrendingRepositories";
import {LazyLoadEvent, MenuItem} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-trending-repositories',
  templateUrl: './trending-repositories.component.html',
  styleUrls: ['./trending-repositories.component.css']
})
export class TrendingRepositoriesComponent {
  totalTrendingRepositories: TrendingRepositories[];
  pageTrendingRepositories: TrendingRepositories[];
  loading: boolean = false;
  trendingRepositoriesColumns: Array<any> = [];
  totalNumberOfTrendingRepositories: number;
  selectedTrendingRepository: TrendingRepositories;
  contextMenuItems: MenuItem[];

  constructor(private translate: TranslateService, private trendingRepositoriesService: TrendingRepositoriesService) {
    this.trendingRepositoriesColumns = [
      {field: 'name', header: 'Repository'},
      {field: 'language', header: 'Language'},
      {field: 'author', header: 'Author'}
    ];

    this.contextMenuItems = [
      { label: 'View Repository', icon: 'pi pi-search', command: (event) => this.viewTrendingRepository(this.selectedTrendingRepository) }
    ];
  }

  viewTrendingRepository(trendingRepository: TrendingRepositories) {
    window.open(trendingRepository.url, "_blank");
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
