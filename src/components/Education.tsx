import React from 'react';
import { Box, Heading, Text, Flex, Divider } from '@chakra-ui/react';

const Education: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading as="h2" size="md" mb={4} pb={1} borderBottom="2px solid" borderColor="brand.500">
                HỌC VẤN
            </Heading>

            <Flex justify="space-between" align="flex-start">
                <Box>
                    <Heading as="h3" size="sm" fontWeight="bold">
                        Đại Học Kinh Tế - Tài Chính TP.HCM
                    </Heading>
                    <Text fontWeight="medium" color="brand.500">
                        Ngành: Công Nghệ Thông Tin
                    </Text>
                </Box>
                <Text fontStyle="italic">
                    09/2021 - Hiện tại
                </Text>
            </Flex>
            <Divider my={4} />
        </Box>
    );
};

export default Education;
