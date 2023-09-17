import { basic, sementic } from '@/styles/palette';
import { fontSize, fontWeight } from '@/styles/typography';
import { useEffect, useState } from 'react';

type ThemeMode = keyof typeof sementic;
const themeModes: ThemeMode[] = ['light', 'dark'];
type CachedMode = ThemeMode | null;

export const useMode = () => {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleMode = () => {
    setMode((currentMode) => {
      const nextMode = currentMode === 'light' ? 'dark' : 'light';
      return nextMode;
    });
  };

  useEffect(() => {
    // select mode
    const cachedMode = window?.localStorage.getItem('cachedMode') as CachedMode;
    setMode(cachedMode || themeModes[0]);
  }, []);

  return {
    currentMode: mode,
    toggleMode,
  };
};

export const useEmotionPalette = () => {
  const { currentMode } = useMode();

  const currentSementic = sementic[currentMode];
  const palette = {
    basic,
    sementic: currentSementic,
  };

  return palette;
};

export const useEmotionTheme = () => {
  const palette = useEmotionPalette();

  return {
    font: {
      size: fontSize,
      weight: fontWeight,
    },
    palette,
  };
};
