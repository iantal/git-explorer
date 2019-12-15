import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService extends CommonService {

  constructor(private http: HttpClient) {
    super();
    this.entity = 'entity1';
  }

  getResult(kw: string, type: string): Promise<any> {
    console.log('SearchService');
    return this.http.get(this.httpBaseAddress + "search/" + type + "?kw=" + kw).toPromise();
  }

}
