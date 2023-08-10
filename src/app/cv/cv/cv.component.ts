import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Cv } from "../model/cv";
import { CvService } from "../cv.service";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]>;
  constructor(private cvService: CvService) {
    this.cvs$ = this.cvService.getCvs();
  }
}
