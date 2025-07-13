'use client';

import { useSearchParams } from 'next/navigation';
import { getCurrentLanguage, getContent } from '@/resources/content';
import { useEffect, useState } from 'react';

export function useLanguage() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Durante SSR, usar inglés por defecto
  const currentLang = mounted ? getCurrentLanguage(searchParams) : 'en';
  const content = mounted ? getContent(searchParams) : getContent(null);

  return {
    currentLang,
    content,
    isEnglish: currentLang === 'en',
    isSpanish: currentLang === 'es',
  };
} 