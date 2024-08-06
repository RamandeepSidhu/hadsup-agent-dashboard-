import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'hadsup-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  @ViewChild('toggleButton') toggleButton: ElementRef | any;
  @ViewChild('menu') menu: ElementRef | any;
  isMenuOpen: boolean = false;
  isSettingsMenuOpen = false;
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.toggleButton?.nativeElement &&
        e.target !== this.menu?.nativeElement
      ) {
        this.isSettingsMenuOpen = false;
      }
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
  toggleSettingsMenu(): void {
    this.isSettingsMenuOpen = !this.isSettingsMenuOpen;
  }

  logout(): void {
    this.isSettingsMenuOpen = false;
    console.log('Logout clicked');
  }
}
