import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { LoadingManager } from 'three';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

@Component({
  selector: 'app-threed-book',
  templateUrl: './threed-book.component.html',
  styleUrls: ['./threed-book.component.css'],
})
export class ThreedBookComponent implements OnInit, OnDestroy {
  scene!: THREE.Scene;
  @ViewChild('canvas', { static : true}) canvas!: ElementRef;
  cube!: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>;
  constructor() {}
  camera!: THREE.Camera;
  renderer!: THREE.WebGLRenderer;

  ngOnInit() {
    this.init();
    this.animate();
  }

  init(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xff0000 );
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});

    this.renderer.setSize(670, 400);
    this.canvas.nativeElement.appendChild(this.renderer.domElement);

    const manager = new LoadingManager();
    manager.addHandler(/\.tga$/i, new TGALoader());
    const loader = new FBXLoader(manager);
    loader.load('../../../assets/Book.FBX', (threedModel) => {
      this.scene.add(threedModel);
    });

    this.camera.position.z = 5;

  }


  animate() {
    requestAnimationFrame( () => this.animate());
    this.renderer.render( this.scene, this.camera);
  }

  ngOnDestroy(): void
  {
    this.renderer.dispose();
  }
}
