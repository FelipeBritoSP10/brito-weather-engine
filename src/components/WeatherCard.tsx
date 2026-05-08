import { Stack, Text, Group, Box, SimpleGrid } from '@mantine/core';
import { MetricCard } from './MetricCard';

export const WeatherCard = ({ data }: any) => (
  <Stack gap="md" mt={30}>
    <Box p={35} bg="gray.0" style={{ borderRadius: 32 }}>
      <Text size="10px" fw={800} c="teal.7" lts={2} mb={10}>LOCALIZAÇÃO</Text>
      <Group justify="space-between" align="flex-end">
        <Stack gap={0}>
          <Text size="32px" fw={900} c="dark.9">{data.name}</Text>
          <Text size="sm" c="dimmed" fw={600}>{data.weather[0].description.toUpperCase()}</Text>
        </Stack>
        <Text size="78px" fw={200} c="dark.7" style={{ lineHeight: 0.8, letterSpacing: -4 }}>
          {Math.round(data.main.temp)}°
        </Text>
      </Group>
    </Box>

    <SimpleGrid cols={2} spacing="md">
      <MetricCard label="UMIDADE" value={`${data.main.humidity}%`} icon="💧" bg="#E0F2F1" />
      <MetricCard label="SENSAÇÃO" value={`${Math.round(data.main.feels_like)}°`} icon="🌡️" bg="#FFF9C4" />
    </SimpleGrid>
  </Stack>
);