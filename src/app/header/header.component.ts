import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value);
      this.jumpToSection(value as string)
    });
  }

  jumpToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  goToHome() {
    this.route.navigate(['home']);
  }

  goToAbout() {
    this.route.navigate(['about']);
  }

  goToSkills() {
    this.route.navigate(['skills']);
  }

  goToEducation() {
    this.route.navigate(['education']);
  }

  goToWork() {
    this.route.navigate(['work']);
  }

  goToExperiance() {
    this.route.navigate(['experiance']);
  }

  goToContact() {
    this.route.navigate(['contact']);
  }

}
