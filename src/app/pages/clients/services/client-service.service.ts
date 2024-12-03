import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIENDPOINT } from 'src/app/config/configuration';
import { Client } from 'src/app/modelos/client.model';
import { ClienteModelo } from 'src/app/modelos/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  headers = new HttpHeaders({
    "Authorization": `Bearer `
  });

  constructor(private http: HttpClient,) { }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.url}${APIENDPOINT.clients.getAllClients}`)
  }

  create(client: Client): Observable<any> {
    const url = `${environment.url}${APIENDPOINT.clients.createClient}`;
    console.log('Enviando datos a:', url, client); // Verifica la URL y los datos enviados
    return this.http.post(url, client);
  }
  
}
