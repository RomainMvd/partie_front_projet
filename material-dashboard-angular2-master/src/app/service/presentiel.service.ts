import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Presentiel } from 'app/Modeles/presentiel';

@Injectable({
  providedIn: 'root'
})
export class PresentielService {
  private baseURL="http://localhost:8080/presentiels";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
  public save( presentiel: any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nomClasse', presentiel.salle);
    const req = new HttpRequest('POST',this.baseURL,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
  /*public findByNomUtilisateur(nom:String):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+nom);
  } */
  public getPresentiel(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+id);
  }
  public updatePresentiel(presentiel:any):Observable<any>{
    var userParse = JSON.parse(presentiel);
    return this.httpClient.put(this.baseURL+'/'+userParse.idCours,userParse);
  }
}
