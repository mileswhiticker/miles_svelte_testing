
import * as THREE from 'three';

let cube = null;
let scene = null;
let camera = null;
let renderer = null;

export function main() {

	//grab some basic stuff
	const canvas = document.querySelector('#c');

	renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

	//setup the camera
	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 2;

	//with everything done so far we can now create a scene
	scene = new THREE.Scene();

	//now setup a  basic mesh
	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
	const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
	cube = new THREE.Mesh(geometry, material);

	//add this new mesh to the scene
	scene.add(cube);

	//renderer.render(scene, camera);
	requestAnimationFrame(render);
}

function render(time) {
	time *= 0.001;  // convert time to seconds

	cube.rotation.x = time;
	cube.rotation.y = time;

	renderer.render(scene, camera);

	requestAnimationFrame(render);
}
