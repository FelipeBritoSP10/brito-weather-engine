import { Box, Text, Stack } from '@mantine/core';

interface MetricProps {
    label: string;
    value: string | number;
    icon: string;
    bg: string;
}

export const MetricCard = ({ label, value, icon, bg }: MetricProps) => (
    <Box p={25} bg={bg} style={{
        borderRadius: 28,
        flex: 1,
        border: '1px solid rgba(0,0,0,0.02)'
    }}>
        <Stack gap={4}>
            <Text size="xl" mb={4}>{icon}</Text>
            <Text size="9px" fw={800} c="dark.6" lts={1.2}
                style={{ textTransform: 'uppercase' }}>
                {label}
            </Text>
            <Text size="22px" fw={900} c="dark.9">
                {value}
            </Text>
        </Stack>
    </Box>
);