import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient,
    @Inject("baseUrl") public baseUrl
  ) {}

  private url(requestParameter: Partial<RequestParameter>): string {
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`;
  }

  get<T>(
    requestParameter: Partial<RequestParameter>,
    id?: string
  ): Observable<T> {
    let url = '';
    if (requestParameter.fullEndPoint) url = requestParameter.fullEndPoint;
    else url = `${this.url(requestParameter)}${id ? `/${id}` : ""}`;
    return this.httpClient.get<T>(url, { headers: requestParameter.headers });
  }
  post() {}
  put() {}
  delete() {}
}

export class RequestParameter {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}
