import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defer, merge, Observable, Observer, of, timer } from 'rxjs';
import { delay, map, mapTo, takeUntil } from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private postHeader: HttpHeaders;
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
  ) { }

  createPost(suffixeUrl: string, body: any) {
    const url = `${environment.apiBaseUrl}${suffixeUrl}`;
    const requestToSend$ = this.http.post(url, body, { headers: this.postHeader });
    return requestToSend$.pipe((data) => {
      console.log(data);
      return data;
    });
    // const requestToSend$ = this.http.post(url, data, { headers: this.postHeader });
    // const showLoadingIndicator$ = timer(500).pipe(
    //   mapTo(true),       // turn the value into `true`, meaning loading is shown
    //   takeUntil(requestToSend$) // emit only if result$ wont emit before 1s
    // );
    // showLoadingIndicator$.subscribe(isLoading => {
    //   console.log(isLoading);
    //   this.loadingService.isLoading.next(true);
    //   if (isLoading) {
    //     this.loadingService.isLoading.next(false);
    //   } console.log(isLoading ? '⏳ loading' : '🙌 free');
    // });
    // return requestToSend$;
  }
}
