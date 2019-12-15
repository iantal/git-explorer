import { Component, OnInit } from '@angular/core';
import {TrendingDevelopersService} from "../../services/trendingDevelopers.service";
import {LazyLoadEvent, MenuItem} from "primeng/api";
import {TranslateService} from "@ngx-translate/core";
import { TrendingDevelopers } from 'src/app/components/TrendingDevelopers';


@Component({
  selector: 'app-trending-developers',
  templateUrl: './trending-developers.component.html',
  styleUrls: ['./trending-developers.component.css']
})
export class TrendingDevelopersComponent  {
  totalTrendingRepositories: TrendingDevelopers[];
  pageTrendingRepositories: TrendingDevelopers[];
  loading: boolean = false;
  trendingRepositoriesColumns: Array<any> = [];
  totalNumberOfTrendingRepositories: number;
  selectedTrendingRepository: TrendingDevelopers;
  contextMenuItems: MenuItem[];

  constructor(private translate: TranslateService, private trendingRepositoriesService: TrendingDevelopersService) {
    this.trendingRepositoriesColumns = [
      {field: 'name', header: 'Name'},
      {field: 'username', header: 'Username'},
      {field: 'avatar', header: 'Avatar'}
    ];

    this.contextMenuItems = [
      { label: 'View Repository', icon: 'pi pi-search', command: (event) => this.viewTrendingRepository(this.selectedTrendingRepository) }
    ];
  }

  viewTrendingRepository(trendingRepository: TrendingDevelopers) {
    window.open(trendingRepository.url, "_blank");
  }

  getTrendingRepositories(event: LazyLoadEvent) {
    this.loading = true;
    this.trendingRepositoriesService.getAllTrendingRepositories().then((result) => {
      this.totalTrendingRepositories = result;
      this.pageTrendingRepositories = result.slice(event.first, (event.first + event.rows));
      console.log("Trending Developers component:");
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
