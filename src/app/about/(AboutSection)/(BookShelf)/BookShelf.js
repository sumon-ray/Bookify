// components/AboutUsBookshelf.js
"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Plane, Box, Sphere } from '@react-three/drei'; // Import Sphere from drei
import { TextureLoader } from 'three';
import { Button } from 'flowbite-react';

// Book Cover Component
const Book = ({ position, image }) => {
  const texture = useLoader(TextureLoader, image);
  
  return (
    <Plane position={position} args={[0.7, 1.1]} rotation={[0, Math.PI / 2, 0]}>
      <meshStandardMaterial attach="material" map={texture} />
    </Plane>
  );
};

// Bookshelf Component
const Bookshelf = () => {
  const books = [
    { position: [-1.5, 0.3, 0], image: '/image/Picture1.png' },
    { position: [-0.5, 0.3, 0], image: '/image/about2.png' },
    { position: [0.5, 0.3, 0], image: '/image/Picture1.png' },
    { position: [1.5, 0.3, 0], image: '/image/Picture1.png' },
  ];

  return (
    <group>
      {/* Create a bookshelf using Box geometries */}
      <Box position={[0, 0, 0]} args={[4, 0.2, 1]} receiveShadow>
        <meshStandardMaterial attach="material" color="#8B4513" /> {/* Brown color for bookshelf */}
      </Box>
      <Box position={[0, 0.2, -0.5]} args={[4, 0.2, 0.1]} receiveShadow>
        <meshStandardMaterial attach="material" color="#8B4513" />
      </Box>
      {books.map((book, index) => (
        <Book key={index} position={book.position} image={book.image} />
      ))}
    </group>
  );
};

const AboutUsBookshelf = () => {
  return (
    <section className="bg-[#fdf6f6] py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Featured Books</h2>
        <p className="text-lg mb-8">
          Discover our selection of featured books that our community loves to share and exchange.
        </p>
        
        {/* 3D Bookshelf Display */}
        <div className="h-64">
          <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Bookshelf />
            {/* Using Sphere instead of SphereBufferGeometry */}
            <Sphere args={[100, 100, 100]} position={[0, 0, -50]} scale={[1, 1, 1]} receiveShadow>
              <meshBasicMaterial color="#87CEFA" side={2} />
            </Sphere>
          </Canvas>
        </div>

        <Button size="lg" color="indigo" className="mt-6">
          Explore More
        </Button>
      </div>
    </section>
  );
};

export default AboutUsBookshelf;
