import { Component, HostListener, Renderer2, OnInit } from '@angular/core';

@Component({
    selector: 'app-listener',
    template: `<p>Resize the window!</p>`
})

export class ListenerComponent implements OnInit {

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        this.checkWindowSize(window.innerWidth)
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        console.log('Window resized', event.target.innerWidth);
        if (event.target.innerWidth === 1000) {
            alert("dont resize the screen");
        }
        this.checkWindowSize(event.target.innerWidth);
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        console.log('Document clicked', event);
    }

    @HostListener('document:keydown', ['$event'])
    onKeydown(event: KeyboardEvent) {
        console.log('Key pressed', event.key);
    }

    @HostListener('mouseenter', ['$event'])
    onMouseEnter(event: MouseEvent) {
        console.log('Mouse entered', event);
    }

    checkWindowSize(width: number) {
        if (width < 1000) {
            this.renderer.setStyle(document.body, 'background-color', 'black');
        } else {
            this.renderer.removeStyle(document.body, 'background-color');
        }
    }
}
