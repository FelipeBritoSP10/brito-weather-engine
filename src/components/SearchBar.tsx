import { TextInput } from '@mantine/core';

export const SearchBar = ({ onSearch, loading }: any) => (
  <TextInput
    variant="filled"
    radius="xl"
    size="md"
    placeholder="Buscar cidade..."
    disabled={loading}
    onKeyDown={(e) => e.key === 'Enter' && onSearch(e.currentTarget.value)}
    styles={{
      input: { backgroundColor: '#F3F4F6', border: 'none', textAlign: 'center' }
    }}
  />
);