import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cv } from "./model/cv";
import { CONSTANTES } from "../config/constantes.config";

@Injectable({
  providedIn: "root",
})
export class CvService {
  constructor(private http: HttpClient) {}

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(CONSTANTES.CV_API_BACKEND);
  }
}
