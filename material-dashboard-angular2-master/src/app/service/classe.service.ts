import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Classe } from '../Modeles/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private baseURL="http://localhost:8080/classes";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
  public save( classe: Classe): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nomClasse', classe.nomClasse);
    const req = new HttpRequest('POST',this.baseURL,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
  /*public findByNomUtilisateur(nom:String):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+nom);
  } */
  public getClasse(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+id);
  }
  public updateClasse(classe:any):Observable<any>{
    var userParse = JSON.parse(classe);
    return this.httpClient.put(this.baseURL+'/'+userParse.idClasse,userParse);
  }
}
