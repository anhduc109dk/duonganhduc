import React from 'react';
import { Box, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react';

const languages = [
    { name: 'Tiếng Việt', level: 'Bản ngữ' },
    { name: 'Tiếng Anh', level: 'Trung cấp (Intermediate)' }
];

const Languages: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading as="h2" size="md" mb={4} pb={1} borderBottom="2px solid" borderColor="brand.500">
                NGÔN NGỮ
            </Heading>

            <SimpleGrid columns={2} spacing={4}>
                {languages.map((lang, idx) => (
                    <Box key={idx}>
                        <Text fontWeight="bold">{lang.name}</Text>
                        <Text>{lang.level}</Text>
                    </Box>
                ))}
            </SimpleGrid>
            <Divider my={4} />
        </Box>
    );
};

export default Languages;
