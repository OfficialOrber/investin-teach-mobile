/** Design tokens. Edit these to rebrand the app's look. */
export const palette = {
  brand: '#4f46e5',
  brandDark: '#4338ca',
  white: '#ffffff',
  black: '#000000',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray500: '#6b7280',
  gray700: '#374151',
  gray900: '#111827',
  red500: '#ef4444',
  green500: '#22c55e',
};

export const lightColors = {
  background: palette.white,
  surface: palette.gray50,
  border: palette.gray200,
  text: palette.gray900,
  textMuted: palette.gray500,
  primary: palette.brand,
  onPrimary: palette.white,
  danger: palette.red500,
  success: palette.green500,
};

export const darkColors: typeof lightColors = {
  background: palette.gray900,
  surface: '#1f2937',
  border: palette.gray700,
  text: palette.gray50,
  textMuted: palette.gray200,
  primary: palette.brand,
  onPrimary: palette.white,
  danger: palette.red500,
  success: palette.green500,
};

export const spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32 } as const;
export const radius = { sm: 6, md: 10, lg: 16, full: 9999 } as const;

export type ThemeColors = typeof lightColors;
