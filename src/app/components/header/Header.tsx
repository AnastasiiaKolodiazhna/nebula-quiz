'use client';

import { useRouter } from 'next/navigation';
import { Button, Header, Icon, VectorImage } from './Header.style';

export const HeaderComponent = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Header>
      <Button onClick={handleBackClick}>
        <Icon src="/Chevron.svg" alt="Previous page" />
      </Button>
      <VectorImage src="/logo.svg" alt="Logo" />
    </Header>
  );
};
