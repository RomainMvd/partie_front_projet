import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private baseURL="http://localhost:8080/cours";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll() : Observable<any>{
    console.log("Je suis le findAll du service");
    return this.httpClient.get(this.baseURL);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
  public save( cours: any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nomClasse', cours.nomCours);
    formData.append('nomClasse', cours.nomMatiere);
    formData.append('nomClasse', cours.nbrHeure);
    const req = new HttpRequest('POST',this.baseURL,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
  /*public findByNomUtilisateur(nom:String):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+nom);
  } */
  public getCours(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+id);
  }
  public updateCours(cours:any):Observable<any>{
    var userParse = JSON.parse(cours);
    return this.httpClient.put(this.baseURL+'/'+userParse.idCours,userParse);
  }
}
