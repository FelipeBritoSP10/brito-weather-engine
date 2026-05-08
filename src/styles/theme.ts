import { createTheme, Center, Paper } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'teal',
  fontFamily: 'Inter, sans-serif',
  components: {
    Center: Center.extend({
      defaultProps: { h: '100vh', bg: '#F3F4F6' },
      styles: { root: { flexDirection: 'column' } },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: 'xl',
        p: 40,
        radius: 32,
        w: '100%',
        style: { maxWidth: 450, backgroundColor: '#FFFFFF' },
      },
    }),
  },
});