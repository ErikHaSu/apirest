import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Contact } from '../interfaces/all';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiContactService {

  constructor(private http: HttpClient) { }

  callApi(query: string) {
    query = apiUrl + query;
    return this.http.get<Contact>(query);
  }
  add(query: string) {
    query = apiUrl + query;
    return this.http.post<Contact>(query, { });
  }
  getContact() {
    return this.callApi(`` + `/contact_source`);
  }
  addContact(query: string) {

    return this.add(`/contact_source` + `?name=` + query);
  }
  delete(query: string) {
    query = apiUrl + query;
    return this.http.delete<Contact>(query, { });
  }
  deleteContact(query: number) {
    return this.delete(`/contact_source` + `/` + query);
  }
  edit(query: string) {
    query = apiUrl + query;
    return this.http.put<Contact>(query, { });
  }
  editContact(query: number, data: string) {
    return this.edit(`/contact_source/` + query + `?name=` + data );
  }
}
