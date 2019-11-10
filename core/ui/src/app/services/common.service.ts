import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  protected entity: String = '';

  protected httpBaseAddress: String = 'http://localhost:8080/';

  constructor() {
  }
}
