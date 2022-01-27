import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  private baseUrl = "http://localhost:8080/enseignants";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    console.log("Je suis le findAll");
    console.log(this.httpClient.get(this.baseUrl));
    return this.httpClient.get(this.baseUrl);
  }

  public deleteEnseignant(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public saveEnseignant(file:File, enseignant:any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nom', enseignant.nomPersonne);
    formData.append('prenom', enseignant.prenomPersonne);
    formData.append('username',enseignant.username);
    formData.append('password',enseignant.password);
    formData.append('email', enseignant.email);
    formData.append('salaire', enseignant.salaire);
    formData.append('date de naissance', enseignant.dateNaissance);
    formData.append('photo',file);
    const req = new HttpRequest('POST',this.baseUrl,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }

  public getEnseignant(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+'/'+id);
  }
  public updateEnseignant(enseignant:any):Observable<any>{
    var userParse = JSON.parse(enseignant);
    return this.httpClient.put(this.baseUrl+'/'+userParse.idPersonne,userParse);
  }
}
