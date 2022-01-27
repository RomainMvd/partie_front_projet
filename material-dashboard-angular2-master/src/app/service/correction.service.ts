import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CorrectionService {
  private baseURL="http://localhost:8080/corrections";
  
  constructor(private httpClient:HttpClient) { }
  
  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseURL);
  }
  
  public delete(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/"+id);
  }
  public save( correction: any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nomClasse', correction.noteExamen);
    formData.append('nomClasse', correction.commentaireEnseignant);
    formData.append('nomClasse', correction.nomMatiere);
    const req = new HttpRequest('POST',this.baseURL,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
  /*public findByNomUtilisateur(nom:String):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+nom);
  } */
  public getCorrection(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+'/'+id);
  }
  public updateCorrection(correction:any):Observable<any>{
    var userParse = JSON.parse(correction);
    return this.httpClient.put(this.baseURL+'/'+userParse.idCorrection,userParse);
  }
}
