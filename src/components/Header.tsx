import { Group, Stack, Text, Box } from '@mantine/core';
import { useDateTime } from '../hooks/useDateTime';

export const Header = ({ userName }: { userName: string }) => {
  const { date, time, greeting, icon } = useDateTime();

  return (
    <Group justify="space-between" align="flex-start" mb={35}>
      <Stack gap={2}>
        <Text size="xs" fw={800} c="teal.6" lts={2}>{icon} {greeting.toUpperCase()}</Text>
        <Text size="26px" fw={900} c="dark.9" style={{ lineHeight: 1 }}>{userName}</Text>
      </Stack>
      <Box ta="right">
        <Text fw={900} size="xl" c="dark.8">{time}</Text>
        <Text size="10px" c="dimmed" fw={700} lts={1}>{date}</Text>
      </Box>
    </Group>
  );
};