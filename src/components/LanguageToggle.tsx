'use client';

import { useLanguage } from '@/utils/useLanguage';
import { useNavigation } from '@/utils/useNavigation';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@once-ui-system/core';

export function LanguageToggle() {
  const { currentLang } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'es' : 'en';
    const newUrl = `${pathname}?lang=${newLang}`;
    router.push(newUrl);
  };

  return (
    <Button
      variant="tertiary"
      size="s"
      onClick={toggleLanguage}
      style={{ minWidth: 'auto' }}
    >
      {currentLang === 'en' ? 'ES' : 'EN'}
    </Button>
  );
} 