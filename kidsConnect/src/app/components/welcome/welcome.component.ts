import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  private audio: HTMLAudioElement;

  constructor(private router: Router) {
    this.audio = new Audio();
    this.audio.src = 'assets/sound.mp3'; // Ruta al archivo de sonido
  }

  ngOnInit() {
    this.audio.load();
    this.audio.play();
    setTimeout(() => {
      this.audio.pause();
      this.router.navigate(['/login']);
    }, 3000); 
  }
}
