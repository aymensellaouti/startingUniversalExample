import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Cv } from "../model/cv";
import { CvService } from "../cv.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]>;
  constructor(private cvService: CvService, private router: Router) {
    this.cvs$ = this.cvService.getCvs();
    this.cvService.selectCv$.subscribe((cv) =>
      this.router.navigate(["cv", cv.id])
    );
  }
}
