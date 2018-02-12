import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmsgService } from './process-httpmsg.service';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHttpmsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get(baseURL + 'promotions')
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

  getPromotion(id: String): Observable<Promotion> {
    return  this.http.get(baseURL + 'promotions/'+ id)
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
}

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get(baseURL + 'promotions?featured=true')
    .map(promotions => promotions[0])
    .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }
}
