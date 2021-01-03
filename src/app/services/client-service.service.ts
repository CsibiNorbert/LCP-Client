import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
baseUrl = environment.apiUrl + 'client';
constructor(private apiservice: HttpClient) { }

getClients(): Observable<Client[]> {
  return this.apiservice.get<Client[]>(this.baseUrl);
}
}
