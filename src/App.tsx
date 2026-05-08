import { MantineProvider, Center, Paper, Container, Stack } from '@mantine/core';
import { useEffect } from 'react';
import { theme } from './styles/theme';
import { useWeather } from './hooks/useWeather';
import { useUser } from './hooks/useUser';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { WelcomeScreen } from './components/WelcomeScreen';
import '@mantine/core/styles.css';

export default function App() {
  const { data, loading, getWeather } = useWeather();
  const { userName, isFirstAccess, saveName } = useUser();

  useEffect(() => { 
    if (!isFirstAccess) getWeather('Santa Izabel do Pará'); 
  }, [isFirstAccess]);

  if (isFirstAccess) {
    return (
      <MantineProvider theme={theme}>
        <WelcomeScreen onConfirm={saveName} />
      </MantineProvider>
    );
  }

  return (
    <MantineProvider theme={theme}>
      <Center bg="#F1F5F9" style={{ minHeight: '100vh' }}>
        <Container size="xs" w="100%">
          <Paper p={40}>
            <Stack gap={0}>
              <Header userName={userName} />
              <SearchBar onSearch={getWeather} loading={loading} />
              {data && <WeatherCard data={data} />}
            </Stack>
          </Paper>
        </Container>
      </Center>
    </MantineProvider>
  );
}