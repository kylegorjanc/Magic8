'use strict';

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// var renderer = new THREE.WebGLRenderer();

// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// var ambLight = new THREE.AmbientLight( 0x404040 );
// var light = new THREE.DirectionalLight( 0xffffff );
// light.position.set( .5, .8, .8 ).normalize();
// scene.add(light);
// scene.add(ambLight);
// var geometry = new THREE.SphereGeometry( .5, 32, 32 );
// var material = new THREE.MeshPhongMaterial( { color: 0x404040 } );
// var ball = new THREE.Mesh( geometry, material );
// scene.add( ball );
// // material.map = THREE.ImageUtils.loadTexture('./public/assets/images/wrapper.png');

// camera.position.z = 5;

// function render() {
// 	requestAnimationFrame( render );
// 	ball.rotation.x += 1/32;
// 	ball.rotation.y += 1/32;
// 	renderer.render( scene, camera );
// }
// render();