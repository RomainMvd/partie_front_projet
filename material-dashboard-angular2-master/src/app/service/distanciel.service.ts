import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Distanciel } from 'app/Modeles/distanciel';

@Injectable({
  providedIn: 'root'
})
export class DistancielService {
  private baseURL="http://localhost:8080/distanciels";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
  public save( distanciel: Distanciel): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nomClasse', distanciel.lienZoom);
    const req = new HttpRequest('POST',this.baseURL,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
  /*public findByNomUtilisateur(nom:String):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+nom);
  } */
  public getDistanciel(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+id);
  }
  public updateDistanciel(distanciel:any):Observable<any>{
    var userParse = JSON.parse(distanciel);
    return this.httpClient.put(this.baseURL+'/'+userParse.idCours,userParse);
  }
}
