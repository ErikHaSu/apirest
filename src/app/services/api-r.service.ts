import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/all';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiRService {

  constructor( private http: HttpClient ) { }
  callApi(query: string) {
    query = apiUrl + query;
    return this.http.get<User>(query);
  }
  add(query: string) {
    query = apiUrl + query;
    return this.http.post<User>(query, { });
  }

  getUser() {
    return this.callApi(`` + `/user`);
  }
  addUser(query: string, querytwo: string) {
    /* const json = JSON.stringify(user);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded');
    return this._http.post(this.add + '')
 */
    return this.add(`/user` + `?name=` + query + `&email=` + querytwo);
  }
  delete(query: string) {
    query = apiUrl + query;
    return this.http.delete<User>(query, { });
  }
  deleteUser(query: number) {
    return this.delete(`/user` + `/` + query);
  }
  edit(query: string) {
    query = apiUrl + query;
    return this.http.put<User>(query, { });
  }
  editUser(query: number, data: string, datatwo: string) {
    return this.edit(`/user/` + query + `?name=` + data + `&email=` + datatwo);
  }

}
