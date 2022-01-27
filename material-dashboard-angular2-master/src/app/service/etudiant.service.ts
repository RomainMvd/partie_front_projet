import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = "";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public save(file:File, user: any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nom', user.nomPersonne);
    formData.append('prenom', user.prenomPersonne);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('email', user.email);
    formData.append('moyenne', user.moyenne);
    formData.append('date de naissance', user.dateNaissance);
    formData.append('photo',file);
    const req = new HttpRequest('POST',this.baseUrl,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
}
