import { Stack, Text, Group, Button } from '@mantine/core';

export const HistorySection = ({ history = [], onSelect }: any) => {
  return (
    <Stack gap="md" mt="sm">
      <Text size="xs" fw={800} c="dimmed" ta="center" lts={1}>
        {history.length > 0 ? 'BUSCAS RECENTES' : 'PESQUISE UMA CIDADE PARA COMEÇAR'}
      </Text>

      {history.length > 0 && (
        <Group justify="center" gap={8}>
          {history.map((city: string) => (
            <Button
              key={city} variant="subtle" color="gray" radius="xl" size="sm"
              onClick={() => onSelect(city)}
              style={{ backgroundColor: '#F3F4F6' }}>
              🕒 {city}
            </Button>
          ))}
        </Group>
      )}
    </Stack>
  );
};