import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Policy } from '../policy'
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashbordService {
  URL: string = 'http://127.0.0.1/API/Policy';
  headers: HttpHeaders;
  plicy_data:any;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>('http://127.0.0.1/API/Policy/read.php');
  }

  createPolicy(policy: Policy): Observable<Policy> {
    return this.httpClient.post<Policy>(`${this.URL}/create.php`, policy);
  }

  updatePolicy(policy: Policy) {
    return this.httpClient.put<Policy>(`${this.URL}/update.php`, policy);
  }

  deletePolicy(id: number) {
    return this.httpClient.delete<Policy>(`${this.URL}/delete.php/?id=${id}`);
  }
}


