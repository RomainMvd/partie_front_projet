import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Examen } from 'app/Modeles/examen';
import { ExamenService } from 'app/service/examen.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'examen',
  templateUrl: "./examen.component.html",
  styleUrls: ["./examen.component.css"]
})
export class ExamenComponent implements OnInit {
  [x: string]: any;
  examens:any;
  examen : Examen = new Examen();
  constructor(private examenService: ExamenService) {}
    
  @Input()
    requiredFileType:string;

    fileName = '';
    uploadProgress:number;
    uploadSub: Subscription;

    
/*
    onFileSelected(event) {
        const file:File = event.target.files[0];
      
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("thumbnail", file);

            const upload$ = this.http.post("/api/thumbnail-upload", formData, {
                reportProgress: true,
                observe: 'events'
            })
            .pipe(
                finalize(() => this.reset())
            );
          
            this.uploadSub = upload$.subscribe(event => {
              if (event.type == HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
            })
        }
    }
*/
  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.examenService.findAll().subscribe(data =>{this.examens = data});
  }
}