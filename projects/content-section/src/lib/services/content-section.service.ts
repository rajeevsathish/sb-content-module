import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


const HOST = document.location.origin;
@Injectable({
  providedIn: 'root'
})
export class ContentSectionService {

  constructor(private http: HttpClient) { }

  search(requestBody) {
    const url = `${HOST}/api/content/v1/search?orgdetails=orgName,email`;
    return this.http.post(url, requestBody)
      .pipe(map((val: any) => {
        if (val.result && val.result.content) {
          val.result.content.forEach(element => this.updateCardData(element));
        }
        return val.result;
      }));
  }

  updateCardData(content) {
   content.cardImg =  content.appIcon || content.courseLogoUrl || content.cardImg || 'assets/images/book.png';
   return content;
  }
}
