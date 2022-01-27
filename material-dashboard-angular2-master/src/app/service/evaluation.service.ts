import { HttpClient, HttpRequest } from '@angular/common/http';
import { Evaluation } from '../Modeles/evaluation';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private baseUrl = "http://localhost:8080/evaluations";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public deleteEvaluation(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public saveEvaluation(evaluation:any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('commentaire', evaluation.commentaire);
    formData.append('Note du cours', evaluation.noteCours);
    const req = new HttpRequest('POST',this.baseUrl,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
  public getEvaluation(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+'/'+id);
  }
  public updateEvaluation(evaluation:any):Observable<any>{
    var userParse = JSON.parse(evaluation);
    return this.httpClient.put(this.baseUrl+'/'+userParse.idEvaluation,userParse);
  }
}
