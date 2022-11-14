import './style.css'
import * as THREE from 'three'


/**
 * Canvas
 */
const $canvas = document.getElementById('canvas')


/**
 * Scene
 */
const scene = new THREE.Scene()


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
camera.position.z = 5
scene.add(camera)


/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


/**
 * AxesHelper
 */
const axesHelper = new THREE.AxesHelper( 2 );
scene.add( axesHelper );


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer(
    {
        antialias: true,
        canvas: $canvas
    }
)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
