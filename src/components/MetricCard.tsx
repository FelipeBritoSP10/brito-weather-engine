import { Box, Stack, Text } from '@mantine/core';

interface MetricCardProps {
  label: string;
  value: string;
  icon?: string;
  bg?: string;
}

export const MetricCard = ({ label, value, icon, bg = 'white' }: MetricCardProps) => (
  <Box 
    p="xl" 
    bg={bg} 
    style={{ 
      borderRadius: 24, 
      border: '1px solid #E2E8F0',
      boxShadow: '0 2px 4px -1px rgb(0 0 0 / 0.05)' 
    }}
  >
    <Stack gap={5}>
      <Text size="10px" fw={800} c="dimmed" lts={1}>{label}</Text>
      <Text size="24px" fw={700} c="dark.9">{icon} {value}</Text>
    </Stack>
  </Box>
);