'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useLanguage } from './useLanguage';
import { useEffect, useState } from 'react';

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { currentLang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigateWithLang = (href: string) => {
    // Construir la URL manualmente sin usar window.location
    let url = href;
    
    // Si estamos en español, agregar el parámetro lang=es
    if (currentLang === 'es') {
      // Verificar si ya existe un parámetro lang en la URL
      if (url.includes('lang=')) {
        // Reemplazar el parámetro lang existente
        url = url.replace(/[?&]lang=[^&]*/, '');
        const separator = url.includes('?') ? '&' : '?';
        url = `${url}${separator}lang=es`;
      } else {
        // Agregar el parámetro lang
        const separator = url.includes('?') ? '&' : '?';
        url = `${url}${separator}lang=es`;
      }
    } else {
      // Si estamos en inglés, remover el parámetro lang si existe
      url = url.replace(/[?&]lang=[^&]*/, '');
      // Limpiar el separador si queda solo
      url = url.replace(/[?&]$/, '');
    }
    
    router.push(url);
  };

  const getUrlWithLang = (href: string) => {
    // Durante SSR, retornar la URL original para evitar hydration mismatch
    if (!mounted) {
      return href;
    }
    
    // Construir la URL manualmente sin usar window.location
    let url = href;
    
    // Si estamos en español, agregar el parámetro lang=es
    if (currentLang === 'es') {
      // Verificar si ya existe un parámetro lang en la URL
      if (url.includes('lang=')) {
        // Reemplazar el parámetro lang existente
        url = url.replace(/[?&]lang=[^&]*/, '');
        const separator = url.includes('?') ? '&' : '?';
        url = `${url}${separator}lang=es`;
      } else {
        // Agregar el parámetro lang
        const separator = url.includes('?') ? '&' : '?';
        url = `${url}${separator}lang=es`;
      }
    } else {
      // Si estamos en inglés, remover el parámetro lang si existe
      url = url.replace(/[?&]lang=[^&]*/, '');
      // Limpiar el separador si queda solo
      url = url.replace(/[?&]$/, '');
    }
    
    return url;
  };

  return {
    navigateWithLang,
    getUrlWithLang,
    currentLang,
  };
} 