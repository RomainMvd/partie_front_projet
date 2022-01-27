import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = "http://localhost:8080/roles";

  constructor(private httpClient:HttpClient) { }


  public deleteRole(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
  public saveRole(role:any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('nom', role.nomRole);
    const req = new HttpRequest('POST',this.baseUrl,formData, {reportProgress: true, responseType: 'text'});
    return this.httpClient.request(req);
  }

  public updateEnseignant(role:any):Observable<any>{
    var userParse = JSON.parse(role);
    return this.httpClient.put(this.baseUrl+'/'+userParse.idRole,userParse);
  }
}
