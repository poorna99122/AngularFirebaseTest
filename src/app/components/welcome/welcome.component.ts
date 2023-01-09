import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  @ViewChild('animeObject')
  AnimationObject!: ElementRef;
  @ViewChild('left', { static: true })
  left!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    console.log("Welcome Called!!");
    // gsap.from(this.AnimationObject.nativeElement, { duration: 2.5, ease: "power4.out", y: -500 });
    // gsap.to(this.left.nativeElement, {
    //   delay: 0.2,
    //   duration: 0.4,
    //   opacity: 0,
    //   y: -20,
    // });

    gsap.to('.left', { duration: 2, ease: "bounce.out", y: 100 });
    gsap.to('.right', { duration: 2, ease: "bounce.out", x: 100 });

  }

}
