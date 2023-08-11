import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Cv } from "../model/cv";
import { DefaultImagePipe } from "../default-image.pipe";
import { CvService } from "../cv.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  @Input({ required: true }) cv: Cv | null = null;
  @Input() size = 50;
  constructor(private cvService: CvService) {}

  selectCv() {
    if (this.cv) this.cvService.select(this.cv);
  }
}
