import React, { useEffect } from 'react';
import './css/module.ParticleEffect.css';

const ParticleEffect = () => {
    useEffect(() => {
        const numParticles = 50; // Number of particles
        const particles = document.getElementById('particles');

        // Function to create a random particle
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 3 + 1}s`;
            particle.style.animationDelay = `${Math.random() * 2}s`;
            particles.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 3000 + Math.random() * 2000);
        };

        // Create initial particles
        for (let i = 0; i < numParticles; i++) {
            createParticle();
        }

        // Function to create particles when scrolling
        const scrollHandler = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop % 50 === 0) {
                createParticle();
            }
        };

        // Add event listener for scrolling
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return <div id="particles"/>;
};

export default ParticleEffect;
