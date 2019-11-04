import {Injectable} from '@angular/core';
import {CommonService} from './common.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service2Service extends CommonService {

  constructor(private http: HttpClient) {
    super();
    this.entity = 'entity2';
  }

  getMethod1(): Promise<any> {
    return this.http.get(this.httpBaseAddress + '' + this.entity + '/getEntity2').toPromise();
  }

  postMethod1(parameter1: string, parameter2: Date, parameter3: number): Promise<any> {
    const payload = {
      'data': {
        'line': parameter1,
        'selectedDate': parameter2.toLocaleDateString(),
        'selectedShift': parameter3
      }
    };
    console.log(payload);
    return this.http.post(this.httpBaseAddress + '' + this.entity + '/postEntity2', payload).toPromise();
  }
}
