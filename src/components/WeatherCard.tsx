import { Stack, Text, Group, Box, SimpleGrid, UnstyledButton } from '@mantine/core';
import { MetricCard } from './MetricCard';

interface WeatherCardProps {
  data: any;
  isFavorite: boolean;
  onToggleFavorite: (cityName: string) => void;
}

export const WeatherCard = ({ data, isFavorite, onToggleFavorite }: WeatherCardProps) => (
  <Stack gap="md">
    {/* Card Principal Branco */}
    <Box 
      p={35} 
      bg="white" 
      style={{ 
        borderRadius: 32, 
        border: '1px solid #E2E8F0',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', // Sombra sutil
        position: 'relative' 
      }}
    >
      {/* Botão de Favorito (Estrela Emoji) */}
      <UnstyledButton 
        onClick={() => onToggleFavorite(data.name)}
        style={{ position: 'absolute', top: 25, right: 25, fontSize: 22 }}
      >
        {isFavorite ? '⭐' : '☆'}
      </UnstyledButton>

      {/* Título de Localização */}
      <Text size="10px" fw={800} c="teal.7" lts={2}>LOCALIZAÇÃO ATUAL</Text>
      
      {/* Informações da Cidade e Temperatura */}
      <Group justify="space-between" align="flex-end" mt={10}>
        <Stack gap={0}>
          <Text size="38px" fw={900} c="dark.9" style={{ letterSpacing: -1 }}>{data.name}</Text>
          <Text size="sm" c="dimmed" fw={600}>{data.weather[0].description.toUpperCase()}</Text>
        </Stack>
        <Text size="82px" fw={200} c="dark.8" style={{ lineHeight: 0.7, letterSpacing: -5 }}>
          {Math.round(data.main.temp)}°
        </Text>
      </Group>
    </Box>

    {/* Grid de Métricas Secundárias */}
    <SimpleGrid cols={2} spacing="md">
      <MetricCard label="UMIDADE" value={`${data.main.humidity}%`} icon="💧" />
      <MetricCard label="SENSAÇÃO" value={`${Math.round(data.main.feels_like)}°`} icon="🌡️" />
    </SimpleGrid>
  </Stack>
);