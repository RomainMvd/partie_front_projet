import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private baseUrl = "http://localhost:8080/examens";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public deleteExamen(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  public saveExamen(file:File, exam: any): Observable<any>{
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
  public getExamen(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+'/'+id);
  }
  public updateExamen(exam:any):Observable<any>{
    var userParse = JSON.parse(exam);
    return this.httpClient.put(this.baseUrl+'/'+userParse.idExamen,userParse);
  }
}
