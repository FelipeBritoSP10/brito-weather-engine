import { TextInput } from '@mantine/core';

export const SearchBar = ({ onSearch, loading }: any) => (
  <TextInput 
    placeholder="Buscar cidade..." 
    size="lg" 
    radius="md"
    onKeyDown={(e) => e.key === 'Enter' && onSearch(e.currentTarget.value)}
    rightSection={loading ? '⏳' : '🔍'}
    styles={{
      input: { 
        backgroundColor: 'white', 
        border: '1px solid #E2E8F0',
        height: '60px',
        fontSize: '16px',
        borderRadius: '16px'
      }
    }}
  />
);