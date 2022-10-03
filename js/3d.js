let scene, camera, render;

function init(){
    scene = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,500);

    hlight = new THREEAmbientLight (0x404040, 100);
    scene.add(hlight);

    render = new THREE.WebGLRenderer({antialias:true});
    render.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
}