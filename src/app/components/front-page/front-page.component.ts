import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private readonly router: Router) {
    this.searchForm = new FormGroup({
      destination: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.router
      .navigate(["activities", this.searchForm?.get("destination")?.value]);
  }

  private initForm(): void {
    this.searchForm = new FormGroup({
      destination: new FormControl(""),
    });
  }
}
