import { Component, OnInit } from "@angular/core";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../cv.service";

@Component({
  selector: "app-details-cv",
  templateUrl: "./details-cv.component.html",
  styleUrls: ["./details-cv.component.css"],
})
export class DetailsCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params["id"];
    this.cvService.getCvById(id).subscribe({
      next: (cv) => {
        this.cv = cv;
      },
      error: (e) => {
        this.router.navigate(["cv"]);
      },
    });
  }
}
