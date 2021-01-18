import { Component, OnInit } from "@angular/core";
import { EMPTY, Observable, of } from "rxjs";
import { Tags } from "src/app/core/tags/tags";
import { TagsService } from "src/app/core/tags/tags.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
})
export class HomepageComponent implements OnInit {

  tags$: Observable<string[]> = of([]);

  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tags$ = this.tagsService.getTags();
  }

}
