import React from 'react';
import { Box, Heading, Text, SimpleGrid, Badge, Divider } from '@chakra-ui/react';

const Skills: React.FC = () => {
    const mainSkills = [
        { category: 'Mobile Development', items: ['Flutter', 'Dart', 'Native Android (Kotlin)', 'Native iOS (Swift)'] },
        { category: 'State Management', items: ['Bloc', 'Provider', 'GetX'] },
        { category: 'Kiến Trúc Ứng Dụng', items: ['Clean Architecture', 'MVVM', 'MVC'] },
        { category: 'DevOps & Deployment', items: ['Google Play Console', 'Apple App Store', 'Fastlane', 'Codemagic'] }
    ];

    const techServices = [
        { category: 'Backend', items: ['Node.js', 'ASP.NET Core', 'Kotlin Spring Boot', 'RESTful API'] },
        { category: 'Database', items: ['SQL Server', 'MongoDB', 'Firebase'] },
        { category: 'Firebase Services', items: ['Authentication', 'Firestore', 'Crashlytics', 'A/B Testing', 'Cloud Messaging'] },
        { category: 'API & Networking', items: ['Google Maps', 'Payment Gateways', 'Dio'] },
        { category: 'Công Cụ Phát Triển', items: ['Git', 'GitHub', 'GitLab', 'DevTools'] }
    ];

    return (
        <Box mb={6}>
            <Heading as="h2" size="md" mb={4} pb={1} borderBottom="2px solid" borderColor="brand.500">
                KỸ NĂNG CHUYÊN MÔN
            </Heading>

            <Box mb={4}>
                <Heading as="h3" size="sm" mb={3}>
                    Kỹ Năng Chính
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {mainSkills.map((skillGroup, idx) => (
                        <Box key={idx}>
                            <Text fontWeight="bold" mb={2}>{skillGroup.category}:</Text>
                            <Box>
                                {skillGroup.items.map((skill, skillIdx) => (
                                    <Badge key={skillIdx} mr={2} mb={2} colorScheme="blue" variant="solid" px={2} py={1}>
                                        {skill}
                                    </Badge>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>

            <Box>
                <Heading as="h3" size="sm" mb={3}>
                    Công Nghệ & Dịch Vụ
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {techServices.map((techGroup, idx) => (
                        <Box key={idx}>
                            <Text fontWeight="bold" mb={2}>{techGroup.category}:</Text>
                            <Box>
                                {techGroup.items.map((tech, techIdx) => (
                                    <Badge key={techIdx} mr={2} mb={2} colorScheme="gray" px={2} py={1}>
                                        {tech}
                                    </Badge>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
            <Divider my={4} />
        </Box>
    );
};

export default Skills;
