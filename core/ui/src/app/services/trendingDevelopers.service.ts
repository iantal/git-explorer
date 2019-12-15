import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendingDevelopersService extends CommonService {

  constructor(private http: HttpClient) {
    super();
    this.entity = 'entity1';
  }

  getAllTrendingRepositories(): Promise<any> {
    console.log('TrendingDevelopersService - getAllTrendingDevelopers ');
    return this.http.get(this.httpBaseAddress + 'developers').toPromise();
  }

}
