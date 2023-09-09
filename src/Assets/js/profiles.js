import * as THREE from "three";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 21,
    window.innerHeight/window.outerHeight,
    0.1,
    1000
);


const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial({color: 0xff0000});

const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);
camera.position.z = 5;


function animate(){
    requestAnimationFrame(animate);
    //mesh.rotation.x += 0.1;
    //mesh.rotation.y += 0.1;
    renderer.render(scene, camera);
}

animate();