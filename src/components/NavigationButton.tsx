'use client';

import { ToggleButton } from '@once-ui-system/core';
import { useNavigation } from '@/utils/useNavigation';

interface NavigationButtonProps {
  href: string;
  prefixIcon?: string;
  label?: string;
  selected?: boolean;
  className?: string;
}

export function NavigationButton({ 
  href, 
  prefixIcon, 
  label, 
  selected, 
  className 
}: NavigationButtonProps) {
  const { getUrlWithLang } = useNavigation();

  return (
    <ToggleButton
      className={className}
      prefixIcon={prefixIcon}
      href={getUrlWithLang(href)}
      label={label}
      selected={selected}
    />
  );
} 