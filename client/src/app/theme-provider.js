'use client';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../lib/createEmotionCache';
import theme from '../lib/theme';

const clientSideEmotionCache = createEmotionCache();

export default function ThemeRegistry({ children }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
