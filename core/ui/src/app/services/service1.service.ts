import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service extends CommonService {

  constructor(private http: HttpClient) {
    super();
    this.entity = 'entity1';
  }

  getMethod1(parameter1: string): Promise<any> {
    console.log('Service1Service - getMethod1 ');
    return this.http.get(this.httpBaseAddress + '' + this.entity + '/getLMethod1/?parameter1=' + parameter1).toPromise();
  }

}
