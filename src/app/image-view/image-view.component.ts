import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GL } from '../shared/webgl-function';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit, AfterViewInit {
  @ViewChild('container', {static: true}) canvas: ElementRef
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.canvas.nativeElement.width = 800;
    this.canvas.nativeElement.height = 600;
    const ctx: WebGLRenderingContext = this.canvas.nativeElement.getContext('webgl');
    GL.create(ctx);
  }

}
