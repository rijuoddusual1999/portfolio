import * as THREE from "three";


import bg1 from "../images/exp1.jpg";





const container = document.querySelector(".normal2");
const loader = new THREE.TextureLoader();


//window.addEventListener('resize');





const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 70 ,
    window.innerHeight/window.outerHeight,
    0.1,
    1000
);


const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth,window.innerHeight);

container.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry( 2,5, 15, 9 );
const material = new THREE.MeshBasicMaterial({
    //color: 0xff0000,
    map: loader.load(bg1) ,
    //wireframe: true,
  });

const mesh = new THREE.Mesh(geometry,material); 

scene.add(mesh);
camera.position.z = 10;



const count = geometry.attributes.position.count;
const clock = new THREE.Clock();






function animate(){
    const time = clock.getElapsedTime()
    for(let i = 0; i < count; i++){
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);

        
        

        geometry.attributes.position.setZ(i, -y* time*1.5);
        geometry.computeVertexNormals();
        geometry.attributes.position.needsUpdate = true;




    }
    //mesh.rotation.x += 0.1;
    //mesh.rotation.y += 0.1;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();


