import { HttpClient, HttpRequest } from '@angular/common/http';
import { Evaluation } from '../Modeles/evaluation';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private baseUrl = "";

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public save(evaluation:any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('commentaire', evaluation.commentaire);
    formData.append('Note du cours', evaluation.noteCours);
    const req = new HttpRequest('POST',this.baseUrl,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
}
