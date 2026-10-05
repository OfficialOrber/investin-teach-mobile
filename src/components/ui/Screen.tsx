import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';
import { useTheme } from '@/theme';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  edges?: readonly Edge[];
  padded?: boolean;
};

export function Screen({ children, style, edges = ['top', 'bottom'], padded = true }: Props) {
  const { colors, spacing } = useTheme();
  return (
    <SafeAreaView edges={edges} style={[styles.flex, { backgroundColor: colors.background }]}>
      <View style={[styles.flex, padded && { padding: spacing.lg }, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
