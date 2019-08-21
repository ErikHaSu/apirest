import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Universities } from '../interfaces/all';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiUniversitiesService {

  constructor(private http: HttpClient) { }
  callApi(query: string) {
    query = apiUrl + query;
    return this.http.get<Universities>(query);
  }
  getUniversity() {
    return this.callApi(`` + `/university`);
  }
  add(query: string) {
    query = apiUrl + query;
    return this.http.post<Universities>(query, { });
  }
  addUniversity(query: string, querytwo: string , querythree: string) {
    return this.add(`/university` + `?name=` + query + `&website=` + querytwo + `&country=` + querythree);
  }
  delete(query: string) {
    query = apiUrl + query;
    return this.http.delete<Universities>(query, { });
  }
  deleteUniversity(query: number) {
    return this.delete(`/university` + `/` + query);
  }
  edit(query: string) {
    query = apiUrl + query;
    return this.http.put<Universities>(query, { });
  }
  editUniversity(query: number, data: string, datatwo: string, datathree: string) {
    return this.edit(`/university/` + query + `?name=` + data + `&website=` + datatwo + `&country` + datathree);
  }

}
