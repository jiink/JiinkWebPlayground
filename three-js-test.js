import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xd2d200 });
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const points = [];
points.push(new THREE.Vector3(-2, 0, 0));
points.push(new THREE.Vector3(0, 2, 0));
points.push(new THREE.Vector3(2, 0, 0));

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(lineGeometry, lineMaterial);

scene.add(line);

camera.position.set(0, 0, 10);
camera.lookAt(0, 0, 0);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  renderer.render(scene, camera);
}
animate();
