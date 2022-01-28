import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Personne } from '../Modeles/personne';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private baseURL="http://localhost:8080/utilisateurs";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
  public save(file:File, user: Personne): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nom', user.nomPersonne);
    formData.append('prenom', user.prenomPersonne);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('file',file);
    const req = new HttpRequest('POST',this.baseURL,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
  /*public findByNomUtilisateur(nom:String):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+nom);
  } */
  public getUtilisateur(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+id);
  }
  public updateUtilisateur(user:any):Observable<any>{
    var userParse = JSON.parse(user);
    return this.httpClient.put(this.baseURL+'/'+userParse.idPersonne,userParse);
  }
}
