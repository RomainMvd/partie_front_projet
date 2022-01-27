import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private baseUrl = "";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public findOne() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  public save(file:File, exam: any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('duree', exam.nomPersonne);
    formData.append('date', exam.prenomPersonne);
    formData.append('Fichier exam',file);
    formData.append('Fichier reponse',file);
    formData.append('email', exam.email);
    formData.append('moyenne', exam.moyenne);
    formData.append('date de naissance', exam.dateNaissance);
    formData.append('photo',file);
    const req = new HttpRequest('POST',this.baseUrl,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }

}
