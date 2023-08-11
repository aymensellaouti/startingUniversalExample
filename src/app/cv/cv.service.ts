import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Cv } from "./model/cv";
import { CONSTANTES } from "../config/constantes.config";

@Injectable({
  providedIn: "root",
})
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  selectCv$: Observable<Cv> = this.selectCvSubject.asObservable();
  constructor(private http: HttpClient) {}

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(CONSTANTES.CV_API_BACKEND);
  }

  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(CONSTANTES.CV_API_BACKEND + id);
  }

  select(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
