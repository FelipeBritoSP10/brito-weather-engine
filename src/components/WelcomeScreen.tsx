import { Stack, Text, TextInput, Button, Paper } from '@mantine/core';
import { useState } from 'react';

export const WelcomeScreen = ({ onConfirm }: any) => {
  const [name, setName] = useState('');

  return (
   
      <Stack gap="xl">
        <Stack gap={5}>
          <Text size="xs" fw={800} c="teal.6" lts={2}>BRITO WEATHER ENGINE</Text>
          <Text size="28px" fw={900} c="dark.9" style={{ lineHeight: 1.1 }}>
            Como podemos te <span style={{ fontWeight: 300 }}>chamar?</span>
          </Text>
        </Stack>

        <TextInput
          placeholder="Seu nome ou apelido..."
          size="lg" radius="xl"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          onKeyDown={(e) => e.key === 'Enter' && name.trim() && onConfirm(name)}
          styles={{ input: { border: '1px solid #E2E8F0', height: '54px' } }}
        />

        <Button
          fullWidth size="lg" radius="xl" color="teal"
          onClick={() => onConfirm(name)} disabled={!name.trim()}
          style={{ height: '54px' }}
        >
          Acessar Dashboard
        </Button>
      </Stack>
   
  );
};