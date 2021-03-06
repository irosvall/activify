import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
})
export class HeaderBarComponent implements OnInit {

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  onNavigateHome(): void {
    this.router.navigate(["/"])
  }

  onNavigateFavorites(): void {
    this.router.navigate(["favorites"])
  }
}
