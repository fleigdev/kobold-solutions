import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js' 
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
const CubeComponent = () => {
    const containerRef = useRef();
    const cube = useRef();
    const greenLight = useRef();
    
    


    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event) => {
      if (event.target === cube.current) {
        isDragging = true;
        previousMousePosition = {
          x: event.clientX,
          y: event.clientY,
        };
      }
    };

    const onMouseMove = (event) => {
      greenLight.current.position.x = (event.clientX / window.innerWidth) * 10 - 5;
      greenLight.current.position.y = -(event.clientY / window.innerHeight) * 10 + 5;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 5;
      containerRef.current.style.height = '400px';
  
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);
      const controls = new OrbitControls(camera, renderer.domElement);

      const textureLoader = new THREE.TextureLoader();
      const logoTexture = textureLoader.load('dark/assets/imgs/koboldlogo02.png');
      const bumpMap = textureLoader.load('dark/assets/imgs/three/NormalMap.png');
      const specMap = textureLoader.load('dark/assets/imgs/three/SpecularMap.png');
  
      // Create a larger cube with a Phong material
      const cubeSize = 3;
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize, 32, 32, 32);
      const materials = [
        new THREE.MeshPhongMaterial({ color: 0x004516 }),
        new THREE.MeshPhongMaterial({ color: 0x004516 }),
        new THREE.MeshPhongMaterial({

          map: logoTexture, // Texture for the front face// Adjust the bump intensity
        }),
        new THREE.MeshPhongMaterial({ color: 0x004516 }),
        new THREE.MeshPhongMaterial({ color: 0x004516 }), // Logo side forward
        new THREE.MeshPhongMaterial({ color: 0x004516 }),
      ];
  
      cube.current = new THREE.Mesh(geometry, materials);
      scene.add(cube.current);

      greenLight.current = new THREE.PointLight(0x278f48, 1, 5); // Green light
      greenLight.current.position.set(0, 0, 2);
      scene.add(greenLight.current);
  
      // Add a white directional light
      const light1 = new THREE.DirectionalLight(0x919191, 1);
      light1.position.set(0, 1, 0);
      scene.add(light1);

      const light2 = new THREE.DirectionalLight(0xedfff0, 1);
      light2.position.set(0, -1, 0);
      scene.add(light2);


  
      controls.current = new OrbitControls(camera, renderer.domElement);
      controls.current.addEventListener('change', () => {
        renderer.render(scene, camera);
      });
  
      const animate = () => {
        requestAnimationFrame(animate);
        if (!isDragging) {
          // Adjust the rotation to create a slight animation effect
          cube.current.rotation.x += 0.0002;
          cube.current.rotation.y += 0.002;
          cube.current.rotation.z += 0.002;
        }
        renderer.render(scene, camera);
      };
      animate();
  
      const handleResize = () => {
        const { clientWidth, clientHeight } = containerRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      };
  
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
  };
export default CubeComponent;