
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {clientModel} from './client.model';

// @ts-ignore
@Injectable({providedIn: 'root'})
export class ClientService {

  constructor(private http: HttpClient, private router: Router) {
  }
  getAllClients(): Observable<any>{
    return this.http.get<Array<clientModel>>(environment.SERVER_API_URL + '/api/clients');
  }

  getClient(id: number): Observable<any> {
    return this.http.get<clientModel>(environment.SERVER_API_URL + '/api/clients/' + id);
  }

  createClient(client: clientModel): Observable<clientModel> {
    // @ts-ignore
    return this.http.post(environment.SERVER_API_URL + '/api/clients/add', client);
  }

  updateClient(id: number, client: clientModel): Observable<clientModel> {
    // @ts-ignore
    return this.http.put(environment.SERVER_API_URL + '/api/clients/edit/' + id, client);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(environment.SERVER_API_URL + '/api/clients/delete/' + id);
  }
  onUpLoad(uploadData, id: number) {
    return this.http.post('http://localhost:8080/api/clients/file/uploadFile/' + id, uploadData)
      .subscribe(res => {console.log(res); },
        err => console.log('Error Occured duringng uploading: ' + err)
      );

  }

  getClientImage(id: number) {
    // @ts-ignore
    return this.http.get<string>('http://localhost:8080/api/clients/file/loadClientImage/' + id, {responseType: 'text'})
      .toPromise();
  }

}
