import { Text as RNText, type TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

type Variant = 'body' | 'title' | 'heading' | 'muted';

export function Text({ variant = 'body', style, ...props }: TextProps & { variant?: Variant }) {
  const { colors } = useTheme();
  const variantStyle = {
    body: styles.body,
    title: styles.title,
    heading: styles.heading,
    muted: styles.muted,
  }[variant];
  const color = variant === 'muted' ? colors.textMuted : colors.text;
  return <RNText style={[variantStyle, { color }, style]} {...props} />;
}

const styles = StyleSheet.create({
  body: { fontSize: 16 },
  title: { fontSize: 20, fontWeight: '600' },
  heading: { fontSize: 28, fontWeight: '700' },
  muted: { fontSize: 14 },
});
