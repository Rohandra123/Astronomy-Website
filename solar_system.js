import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();

// Create a camera, which determines what we'll see when we look at the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer and attach it to the document
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('solar-system-container').appendChild(renderer.domElement);

// Add a simple geometry and material to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position the camera
camera.position.z = 5;

// Create a render loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the cube for some animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

animate();
