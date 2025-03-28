import React from 'react';
import { Box, Heading, Text, Flex, List, ListItem, ListIcon, Divider } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const experiences = [
    {
        company: 'Chuyên Việt Corp',
        duration: '12/2023 - Hiện tại',
        position: 'Fresher Mobile Developer',
        responsibilities: [
            'Phát triển hệ thống CRM trên nền tảng mobile với Flutter và Bloc',
            'Tối ưu hóa UI/UX theo best practices',
            'Tích hợp Restful API với backend SQL Server',
            'Hỗ trợ triển khai và tối ưu API'
        ]
    },
    {
        company: 'Tiệm Kiết',
        duration: '08/2023 - Hiện tại',
        position: 'Mobile Developer',
        responsibilities: [
            'Phát triển ứng dụng tích điểm và giao hàng',
            'Tích hợp Google Maps API và Firebase Cloud Messaging',
            'Xây dựng và tối ưu hóa API backend',
            'Thiết kế giao diện theo Material Design'
        ]
    },
    {
        company: 'Viet Information Technology Project',
        duration: '10/2023 - 12/2023',
        position: 'Intern Mobile Developer',
        responsibilities: [
            'Phát triển ứng dụng thuê tài xế lái xe hộ',
            'Tích hợp Google Maps và Firebase Authentication',
            'Tối ưu hiệu suất và trải nghiệm người dùng'
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading as="h2" size="md" mb={4} pb={1} borderBottom="2px solid" borderColor="brand.500">
                KINH NGHIỆM LÀM VIỆC
            </Heading>

            {experiences.map((exp, idx) => (
                <Box key={idx} mb={idx < experiences.length - 1 ? 6 : 0}>
                    <Flex justify="space-between" align="center" mb={1}>
                        <Heading as="h3" size="sm" fontWeight="bold">
                            {exp.company}
                        </Heading>
                        <Text fontStyle="italic" fontSize="sm">
                            {exp.duration}
                        </Text>
                    </Flex>

                    <Text fontWeight="medium" mb={2} color="brand.500">
                        {exp.position}
                    </Text>

                    <List spacing={1}>
                        {exp.responsibilities.map((resp, respIdx) => (
                            <ListItem key={respIdx} display="flex" alignItems="center">
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                <Text fontSize="sm">{resp}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            ))}
            <Divider my={4} />
        </Box>
    );
};

export default Experience;
