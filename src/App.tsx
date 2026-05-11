import { MantineProvider, Center, Stack, Paper } from '@mantine/core';
import { theme } from './styles/theme';
import { useWeather, useUser, useWeatherStorage } from './hooks';
import { Header, SearchBar, WeatherCard, WelcomeScreen, HistorySection } from './components';
import '@mantine/core/styles.css';
export default function App() {
  const { userName, isFirstAccess, saveName } = useUser();
  const { history, favorites, saveSearch, toggleFavorite } = useWeatherStorage();
  const { data, loading, getWeather } = useWeather(saveSearch);

  return (
    <MantineProvider theme={theme}>
      <Center bg="#F1F5F9" style={{ minHeight: '100vh', padding: 20 }}>
        <Paper p={40} radius={32} shadow="md" w="100%" style={{ maxWidth: 450 }}>
          {isFirstAccess ? <WelcomeScreen onConfirm={saveName} /> : (
            <Stack gap="xl">
              <Header userName={userName} />
              <SearchBar onSearch={getWeather} loading={loading} />
              {data ? <WeatherCard data={data} isFavorite={favorites.includes(data.name)} onToggleFavorite={toggleFavorite} />
                : <HistorySection history={history} onSelect={getWeather} />}
            </Stack>
          )}
        </Paper>
      </Center>
    </MantineProvider>
  );
}