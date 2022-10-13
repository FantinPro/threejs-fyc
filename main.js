import * as THREE from "three";
import "./style.css";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const mouse = {
  x: undefined,
  y: undefined,
};

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / sizes.width - 0.5) * 2;
  mouse.y = -(event.clientY / sizes.height - 0.5) * 2;
});

// create scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// create camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 0;

scene.add(camera);

// create renderer
const canvas = document.getElementById("tuto-threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

// render
renderer.render(scene, camera);

const control = new OrbitControls(camera, canvas);
control.enableDamping = true;

// update
const updateMyScene = () => {

    control.update();

    renderer.render(scene, camera);
  
    window.requestAnimationFrame(updateMyScene);
  };
  
  updateMyScene()
