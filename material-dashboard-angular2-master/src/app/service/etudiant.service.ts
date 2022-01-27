import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = "http://localhost:8080/etudiants";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  public deleteEtudiant(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public saveEtudiant(file:File, etudiant: any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nom', etudiant.nomPersonne);
    formData.append('prenom', etudiant.prenomPersonne);
    formData.append('username',etudiant.username);
    formData.append('password',etudiant.password);
    formData.append('email', etudiant.email);
    formData.append('moyenne', etudiant.moyenne);
    formData.append('date de naissance', etudiant.dateNaissance);
    formData.append('photo',file);
    const req = new HttpRequest('POST',this.baseUrl,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
  public getEtudiant(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+'/'+id);
  }
  public updateEtudiant(etudiant:any):Observable<any>{
    var userParse = JSON.parse(etudiant);
    return this.httpClient.put(this.baseUrl+'/'+userParse.idPersonne,userParse);
  }
}
