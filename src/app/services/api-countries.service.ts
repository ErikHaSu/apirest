import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Countries } from '../interfaces/all';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiCountriesService {

  constructor(private http: HttpClient) { }

  callApi(query: string) {
    query = apiUrl + query;
    return this.http.get<Countries>(query);
  }
  getCountry() {
    return this.callApi(`` + `/country`);
  }
  add(query: string) {
    query = apiUrl + query;
    return this.http.post<Countries>(query, { });
  }
  addCountry(query: string, querytwo: string , querythree: string) {
    return this.add(`/country` + `?name=` + query + `&border=` + querytwo + `&continent=` + querythree);
  }
  delete(query: string) {
    query = apiUrl + query;
    return this.http.delete<Countries>(query, { });
  }
  deleteCountry(query: number) {
    return this.delete(`/country` + `/` + query);
  }
  edit(query: string) {
    query = apiUrl + query;
    return this.http.put<Countries>(query, { });
  }
  editCountry(query: number, data: string, datatwo: string, datathree: string) {
    return this.edit(`/country/` + query + `?name=` + data + `&border=` + datatwo + `&continent` + datathree);
  }
}
