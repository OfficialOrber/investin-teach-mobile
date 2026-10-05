import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { darkColors, lightColors, radius, spacing, type ThemeColors } from './tokens';

type Theme = {
  colors: ThemeColors;
  spacing: typeof spacing;
  radius: typeof radius;
  isDark: boolean;
};

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const theme = useMemo<Theme>(
    () => ({ colors: isDark ? darkColors : lightColors, spacing, radius, isDark }),
    [isDark],
  );
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme(): Theme {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
