import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  private baseUrl = "http://localhost:8080/candidats";


  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public deleteCandidat(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public saveCandidat(candidat:any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nom', candidat.nomPersonne);
    formData.append('prenom', candidat.prenomPersonne);
    formData.append('poste', candidat.posteRecherche);

    formData.append('email', candidat.email);
    formData.append('Lettre Motiv',candidat.lettreMotivation);
    formData.append('CV',candidat.cV);

    const req = new HttpRequest('POST',this.baseUrl,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
}
