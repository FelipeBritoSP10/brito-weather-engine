import { Stack, Text, TextInput, Button, Paper, Center } from '@mantine/core';
import { useState } from 'react';

export const WelcomeScreen = ({ onConfirm }: { onConfirm: (name: string) => void }) => {
  const [name, setName] = useState('');

  return (
    <Center bg="#F1F5F9" style={{ minHeight: '100vh' }}>
      <Paper p={50} w="90%" style={{ maxWidth: 420 }}>
        <Stack gap="xl">
          <Stack gap={5}>
            <Text size="xs" fw={800} c="teal.6" lts={2}>BRITO WEATHER ENGINE</Text>
            <Text size="28px" fw={900} c="dark.9" style={{ lineHeight: 1.1 }}>
              Como podemos te <span style={{ fontWeight: 300 }}>chamar?</span>
            </Text>
          </Stack>

          <TextInput
            placeholder="Seu nome ou apelido..."
            size="lg"
            radius="xl"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            onKeyDown={(e) => e.key === 'Enter' && onConfirm(name)}
          />

          <Button
            fullWidth size="lg" radius="xl" color="teal"
            onClick={() => onConfirm(name)} disabled={!name.trim()}>
            Acessar Dashboard
          </Button>
        </Stack>
      </Paper>
    </Center>
  );
};