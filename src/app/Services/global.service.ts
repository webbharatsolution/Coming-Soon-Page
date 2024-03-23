import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalService {

    getPublicApiLoader = false;
    getPublicApiList: any = [];
    selectedApiVersion: any = null;
    letestApiVersion: any = null;
    // baseUrl = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }

    getPublicApi() {
        // return this.httpClient.get<any>(environment.swaggerConfig);
    }
    
 //RC-6234 Jatin G 24-08-23
 getPublicApiVersion(): Observable<any> {
    // Your implementation here
    // Return an Observable
    return this.httpClient.get<any>('your-api-url');
  }

}
