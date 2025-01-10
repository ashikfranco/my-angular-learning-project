import { Component , AfterViewInit } from '@angular/core';
import JSConfetti from 'js-confetti';

@Component({
  selector: 'app-js-confetti',
  templateUrl: './js-confetti.component.html',
  styleUrls: ['./js-confetti.component.scss']
})
export class JsConfettiComponent  implements AfterViewInit {
  private jsConfetti = new JSConfetti();

  ngAfterViewInit() { // Optionally launch confetti on init // this.launchConfetti(); 
    setInterval(() => {
      this.launchConfetti();
    }, 1000);

    }

    launchConfetti() { 
      this.jsConfetti.addConfetti();
     }

}
