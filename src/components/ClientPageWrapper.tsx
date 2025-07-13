'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/utils/useLanguage';

interface ClientPageWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export function ClientPageWrapper({ children, title, description }: ClientPageWrapperProps) {
  const { content } = useLanguage();

  useEffect(() => {
    // Actualizar el título y descripción de la página
    document.title = title;
    
    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }
  }, [title, description]);

  return <>{children}</>;
} 