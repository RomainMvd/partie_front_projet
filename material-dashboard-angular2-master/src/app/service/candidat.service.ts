import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private baseURL="http://localhost:8080/candidats"

  constructor(private httpClient:HttpClient) { }

  public saveCandidat(file:File, candidat: any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nom', candidat.nomPersonne);
    formData.append('prenom', candidat.prenomPersonne);
    formData.append('email',candidat.email);
    formData.append('poste convoité',candidat.posteConvoite);
    formData.append('lettre de motivation',candidat.lettreMotivation);
    formData.append('CV',candidat.cV);
    const req = new HttpRequest('POST',this.baseURL,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }
}
