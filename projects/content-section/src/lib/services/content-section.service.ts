import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentSectionService {

  constructor(private http: HttpClient) { }

  search(requestBody) {
    return this.http.post('https://staging.sunbirded.org/api/content/v1/search?orgdetails=orgName,email', requestBody)
      .pipe(map((val: any) => {
        return val.result;
      }));
  }
}
