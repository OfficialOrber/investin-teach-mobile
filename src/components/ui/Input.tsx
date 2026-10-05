import { forwardRef } from 'react';
import { TextInput, type TextInputProps, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';

export const Input = forwardRef<TextInput, TextInputProps>(function Input(
  { style, ...props },
  ref,
) {
  const { colors, radius, spacing } = useTheme();
  return (
    <TextInput
      ref={ref}
      placeholderTextColor={colors.textMuted}
      style={[
        styles.input,
        {
          color: colors.text,
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderRadius: radius.md,
          padding: spacing.md,
        },
        style,
      ]}
      {...props}
    />
  );
});

const styles = StyleSheet.create({
  input: { borderWidth: 1, fontSize: 16 },
});
