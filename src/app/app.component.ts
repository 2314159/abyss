import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <div class="dot" [ngClass]="{ 'dot--invisible': timer }" (click)="animate = !animate"></div>
      <!-- <h1 (click)="reset()">{{ timer }}</h1> -->
    </div>
  `,
  styles: [`
    .app {
      height: 100vh;
      width: 100vw;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h1 {
      color: hsl(230deg, 15%, 15%);
      font-size: 3rem;
    }

    .dot {
      width: 16px;
      height: 16px;
      background: hsl(230deg, 15%, 25%);
      border-radius: 16px;
      transition: 1s all ease-in-out;
      opacity: 1;
    }

    .dot--invisible {
      opacity: 0;
    }
  `]
})
export class AppComponent {
  timer = 0;
  animate = true;
  
  ngOnInit() {
    setInterval(() => {
      if (this.animate) {
        this.timer = (this.timer + 1) % 2;
      }
    }, 2000);
  }

  reset() {
    this.timer = 60;
  }
}
