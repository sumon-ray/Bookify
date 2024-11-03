// components/ThreeBackground.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const mountRef = useRef(null);
    const sphereRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create a geometry and material for the background
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        const textureLoader = new THREE.TextureLoader();
        const material = new THREE.MeshBasicMaterial({
            map: textureLoader.load('../../../public/back.jpg'),
            side: THREE.BackSide,
        });

        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphereRef.current = sphere; // Store the reference to the sphere

        // Position the camera outside the sphere
        camera.position.set(0, 0, 1); // Adjust this as needed

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (sphereRef.current) {
                sphereRef.current.rotation.y = scrollY * 0.001; // Adjust this factor for speed
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Handle window resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Clean up on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return (
        <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
    );
};

export default ThreeBackground;
