import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  loading = 'lazy' 
}: OptimizedImageProps) {
  // Para imágenes en public/, agregamos parámetros de optimización
  // En producción, podrías usar un CDN con transformaciones automáticas
  const optimizedSrc = src;

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      // Placeholder mientras carga
      style={{ 
        backgroundColor: '#1a1a1a',
        objectFit: 'cover'
      }}
    />
  );
}
