import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from './policy';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "https://php-api-serve.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  private refresh = new Subject<void>();
  get refreshpage(){
    return this.refresh;
  } 

  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/read.php`);
  }

  createPolicy(policy: Policy): Observable<Policy>{
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/create.php`, policy)
    .pipe(
      tap(()=>{
        this.refresh.next();
      })
    );
  }

  updatePolicy(policy: Policy){
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/update.php`, policy)
    .pipe(
      tap(()=>{
        this.refresh.next();
      })
    );
  }

  deletePolicy(id: number){
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/delete.php/?id=${id}`)
    .pipe(
      tap(()=>{
        this.refresh.next();
      })
    );
  }  

}
