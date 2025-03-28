import React from 'react';
import { Box, Heading, Text, Badge, List, ListItem, ListIcon, Divider, Link } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { Flex } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        name: 'LMD - Ứng Dụng Thuê Tài Xế',
        duration: '06/2024 - 09/2024',
        details: [
            'Phát triển toàn bộ ứng dụng di động',
            'Triển khai trên App Store & Google Play'
        ],
        technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js'],
        url: 'https://www.lmd.vn/tai-app',
    },

    {
        name: 'Siker - Ứng Dụng Tìm Kiếm Đồ Vật',
        duration: '2021 - 2023',
        details: [
            'Phát triển ứng dụng tìm kiếm đồ vật cho sinh viên',
            'Tích hợp tìm kiếm ảnh AI',
            'Đạt Giải Ba Hội Nghị Sinh Viên Nghiên Cứu Khoa Học'
        ],
        technologies: ['Flutter', 'Firebase'],
        url: 'https://www.youtube.com/watch?v=5I70bSKpqqM',
    }
];

const Projects: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading as="h2" size="md" mb={4} pb={1} borderBottom="2px solid" borderColor="brand.500">
                DỰ ÁN NỔI BẬT
            </Heading>

            {projects.map((project, idx) => (
                <Box key={idx} mb={idx < projects.length - 1 ? 6 : 0}>
                    <Flex justify="space-between" align="center" mb={2}>
                        <Flex align="center">
                            <Heading as="h3" size="sm" fontWeight="bold">
                                {project.name}
                            </Heading>
                            {project.url && (
                                <Link
                                    href={project.url}
                                    isExternal
                                    ml={2}
                                    color="blue.500"
                                    display="inline-flex"
                                    alignItems="center"
                                >
                                    <FaExternalLinkAlt size="12px" />
                                </Link>
                            )}
                        </Flex>
                        <Text fontStyle="italic" fontSize="sm">
                            {project.duration}
                        </Text>
                    </Flex>

                    <List spacing={1} mb={2}>
                        {project.details.map((detail, detailIdx) => (
                            <ListItem key={detailIdx} display="flex" alignItems="center">
                                <ListIcon as={MdCheckCircle} color="green.500" />
                                <Text fontSize="sm">{detail}</Text>
                            </ListItem>
                        ))}
                    </List>

                    {project.technologies.length > 0 && (
                        <Box>
                            <Text fontSize="sm" fontWeight="medium" mb={1}>Công nghệ:</Text>
                            {project.technologies.map((tech, techIdx) => (
                                <Badge key={techIdx} colorScheme="purple" mr={2} mb={1}>
                                    {tech}
                                </Badge>
                            ))}
                        </Box>
                    )}
                </Box>
            ))}
            <Divider my={4} />
        </Box>
    );
};

export default Projects;