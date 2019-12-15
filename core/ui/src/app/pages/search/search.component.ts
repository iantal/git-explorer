import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { LazyLoadEvent, MenuItem } from "primeng/api";
import {TranslateService} from "@ngx-translate/core";
import { SearchService } from 'src/app/services/search.service';
import { SearchResult } from 'src/app/components/SearchResult';
import { Item } from 'src/app/components/Item';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  totalTrendingRepositories: SearchResult[];
  items: Item[];
  pageTrendingRepositories: Item[];
  loading: boolean = false;
  trendingRepositoriesColumns: Array<any> = [];
  totalNumberOfTrendingRepositories: number;
  selectedTrendingRepository: SearchResult;
  contextMenuItems: MenuItem[];


  types: SelectItem[];

  selectedType: string;
  kw: string;
  tcode: string;

  constructor(private translate: TranslateService, private searchService: SearchService) {
    this.types = [
      { label: 'Readme', value: 'readme', icon: 'fa fa-fw fa-cc-paypal' },
      { label: 'Description', value: 'description', icon: 'fa fa-fw fa-cc-visa' },
      { label: 'Repository', value: 'repository', icon: 'fa fa-fw fa-cc-mastercard' }
    ];

    this.trendingRepositoriesColumns = [
      {field: 'full_name', header: 'Author'},
      {field: 'html_url', header: 'Name'},
      {field: 'forks_count', header: 'Language'}
    ];

  }

  clear() {
    this.selectedType = null;
    this.kw = null;
  }

  doSearch(event) {
    console.log(this.selectedType + " " + this.tcode);
    this.searchService.getResult(this.tcode, this.selectedType).then((result) => {
      this.items = result["items"];
      console.log(this.items);
      this.pageTrendingRepositories = this.items;
      console.log("Home component:");
      console.log(this.pageTrendingRepositories);
      this.totalNumberOfTrendingRepositories = result["total_count"];
      this.loading = false;
    }).catch((error) => {
      console.error(error);
    });
  }
}
