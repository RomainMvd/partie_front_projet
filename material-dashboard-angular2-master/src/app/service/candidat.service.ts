<<<<<<< HEAD
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
=======
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';


>>>>>>> 0f30f37021d7881ad599514beb4deb446a4ebd40

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
<<<<<<< HEAD
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
=======

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
>>>>>>> 0f30f37021d7881ad599514beb4deb446a4ebd40
    return this.httpClient.request(req);
  }
}
