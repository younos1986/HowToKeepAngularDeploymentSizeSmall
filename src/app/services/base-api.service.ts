import { HttpClient, HttpErrorResponse, HttpRequest, HttpEventType } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { NotifyService } from "./notify.service";


@Injectable()
export class BaseApiService {



  constructor(
    public http: HttpClient,
    public notifyService: NotifyService
  ) {
  }




  upload(url: string, model: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/x-www-form-urlencoded',
      })
    };
    // httpOptions.headers.delete('Content-Type');
    const formData = new FormData();
    formData.append(model.name, model);
    return this.http
      .post<any>(url, formData, httpOptions)
      .pipe(
        map(response => response || {}),
        catchError(err => this.handleError(err)));
  }

  post(url: string, model: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http
      .post<any>(url, model, httpOptions)
      .pipe(
        map(response => response || {}),
        //  .catch (err => this.dataHandler.handleHttpError(err));
        catchError(err => this.handleError(err)));
  }


  delete(url: string, data: any): Observable<any> {

    return this.http
      .delete<any>(url, data)
      .pipe(
        map(response => response || {}),
        catchError(err => this.handleError(err)));

  }


  open(url: string): Observable<any> {

    return this.http
      .get<any>(url)
      .pipe(
        map(response => response || {}),
        catchError(err => this.handleError(err)));
  }

  get(url: string): Observable<any> {
    return this.http
      .get<any>(url)
      .pipe(
        map(response => response || {}),
        catchError(err => this.handleError(err)));

  }

  postImage(url: string, model: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data; charset=utf-8',
      })
    };

    return this.http
      .post<any>(url, model, httpOptions)
      .pipe(
        map(response => response || {}),
        catchError(err => this.handleError(err)));
  }

  toQueryString(obj: any): string {
    const parts = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value !== null && value !== undefined) {
          parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
      }
    }
    return parts.join('&');
  }

  public handleError(error: HttpErrorResponse): Observable<any> {

    if (error != null) {
      if (error.status == 403) {
        debugger;
        this.notifyService.onWarning("", "مجوز دسترسی این درخواست برای شما صادر نشده است!");
      }
      else {
        //  alert("درخواست شما با خطا مواجه شده است!");
      }
    }
    //this.spinner.hide();
    return observableThrowError(error);
  }

}
