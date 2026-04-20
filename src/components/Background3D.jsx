import React, { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // More particles, brighter
    const particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        radius: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.0008,
        speedY: (Math.random() - 0.5) * 0.0008,
        opacity: 0.3 + Math.random() * 0.4,
      });
    }
    
    // Multiple spaceships
    const spaceships = [
      {
        x: 0.85, // right side
        y: 0.25,
        size: 1,
        speed: 0.8,
        opacity: 0.25
      },
      {
        x: 0.12, // left side
        y: 0.75,
        size: 0.8,
        speed: 0.6,
        opacity: 0.2
      },
      {
        x: 0.92, // far right
        y: 0.7,
        size: 0.6,
        speed: 1.0,
        opacity: 0.18
      },
      {
        x: 0.08, // far left
        y: 0.35,
        size: 0.7,
        speed: 0.7,
        opacity: 0.22
      }
    ];
    
    // Draw detailed spaceship
    const drawSpaceship = (x, y, size, opacity, floatY, engineGlow) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // Engine glow
      ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + engineGlow * 0.2})`;
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#3b82f6';
      ctx.beginPath();
      ctx.ellipse(x, y + 8 * size + floatY, 6 * size, 4 * size, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Main body
      ctx.fillStyle = '#6b7280';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#3b82f6';
      ctx.beginPath();
      ctx.moveTo(x, y - 18 * size + floatY);
      ctx.lineTo(x + 14 * size, y + 6 * size + floatY);
      ctx.lineTo(x + 7 * size, y + 6 * size + floatY);
      ctx.lineTo(x + 7 * size, y + 14 * size + floatY);
      ctx.lineTo(x, y + 10 * size + floatY);
      ctx.lineTo(x - 7 * size, y + 14 * size + floatY);
      ctx.lineTo(x - 7 * size, y + 6 * size + floatY);
      ctx.lineTo(x - 14 * size, y + 6 * size + floatY);
      ctx.closePath();
      ctx.fill();
      
      // Wings
      ctx.fillStyle = '#4b5563';
      ctx.beginPath();
      ctx.moveTo(x - 14 * size, y + 2 * size + floatY);
      ctx.lineTo(x - 22 * size, y + 12 * size + floatY);
      ctx.lineTo(x - 14 * size, y + 8 * size + floatY);
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(x + 14 * size, y + 2 * size + floatY);
      ctx.lineTo(x + 22 * size, y + 12 * size + floatY);
      ctx.lineTo(x + 14 * size, y + 8 * size + floatY);
      ctx.fill();
      
      // Cockpit
      ctx.fillStyle = '#3b82f6';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(x, y - 8 * size + floatY, 5 * size, 0, Math.PI * 2);
      ctx.fill();
      
      // Cockpit glow
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(x - 2 * size, y - 10 * size + floatY, 2 * size, 0, Math.PI * 2);
      ctx.fill();
      
      // Body details
      ctx.fillStyle = '#374151';
      ctx.beginPath();
      ctx.ellipse(x, y + 2 * size + floatY, 3 * size, 2 * size, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      time += 0.008;
      
      // Dark background with slight gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a0a14');
      gradient.addColorStop(1, '#05050a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw brighter particles
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1;
        if (p.y > 1) p.y = 0;
        
        // Brighter particles with glow
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#3b82f6';
        ctx.beginPath();
        ctx.arc(p.x * canvas.width, p.y * canvas.height, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw all spaceships
      for (let i = 0; i < spaceships.length; i++) {
        const ship = spaceships[i];
        const floatY = Math.sin(time * ship.speed + i) * 8;
        const engineGlow = Math.sin(time * 5 + i) * 0.5 + 0.5;
        const xPos = ship.x * canvas.width;
        const yPos = ship.y * canvas.height;
        
        drawSpaceship(xPos, yPos, ship.size, ship.opacity, floatY, engineGlow);
      }
      
      // Reset shadow
      ctx.shadowBlur = 0;
      
      animationId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        display: 'block',
        pointerEvents: 'none'
      }} 
    />
  );
};

export default Background3D;