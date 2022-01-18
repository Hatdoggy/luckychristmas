// import * as THREE from 'three';

// export const three = ()=>{
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// const canvas = document.querySelector('canvas.webgl')

// const renderer = new THREE.WebGLRenderer({ 
//     alpha: true,
//     canvas: canvas
// });

// const loader = new THREE.TextureLoader();
// const snow = loader.load('Free%20Spins%20Madness!_files/snow.png');

// const particleGeo = new THREE.BufferGeometry;
// const particlesCnt = 5000;

// const posArr = new Float32Array(particlesCnt * 3)

// for(let i = 0 ;i<particlesCnt * 3; i++){
//     posArr[i] = (Math.random() - 0.5)* 5;
// }

// particleGeo.setAttribute('position',new THREE.BufferAttribute(posArr,3))

// const material = new THREE.PointsMaterial({
//     size:.005,
// })

// const particlesmaterial = new THREE.PointsMaterial({
//     transparent:true, 
//     size:.005,
// })

// const particlesMesh = new THREE.Points(particleGeo,particlesmaterial);
// scene.add(particlesMesh)

// // Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     renderer.setClearColor( 0x000000, 0 ); // the default
// })

// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 2
// scene.add(camera)

// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// renderer.setClearColor( 0x000000, 0 ); // the default

// const animateParticles = (event)=>{
//     mouseY = event.clientY;
//     mouseX = event.clientX;
// }

// document.addEventListener('mousemove',animateParticles)

// let mouseX = 0;
// let mouseY = 0;

// const clock = new THREE.Clock()

// const tick = () =>
// {
//     const elapsedTime = clock.getElapsedTime()
//     particlesMesh.rotation.y = -.08* elapsedTime;
//     particlesMesh.rotation.x = .08* elapsedTime;

//     renderer.render(scene, camera)
//     window.requestAnimationFrame(tick)
// }

// tick()
// }