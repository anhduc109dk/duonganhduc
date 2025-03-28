import React from 'react';
import { Box, Heading, List, ListItem, ListIcon, Divider } from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';

const certifications = [
    'Giải Nhất phần mềm sáng tạo khoa Công nghệ thông tin - UEF(2022)',
    'Giải Ba nguyên cứu khoa học cấp trường - UEF (2023)',
    'Giải Ba Thành Phố Hội Nghị Sinh Viên Nghiên Cứu Khoa Học (2023)'
];

const Certifications: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading as="h2" size="md" mb={4} pb={1} borderBottom="2px solid" borderColor="brand.500">
                CHỨNG CHỈ & THÀNH TỰU
            </Heading>

            <List spacing={2}>
                {certifications.map((cert, idx) => (
                    <ListItem key={idx} display="flex" alignItems="center">
                        <ListIcon as={MdStar} color="yellow.500" />
                        {cert}
                    </ListItem>
                ))}
            </List>
            <Divider my={4} />
        </Box>
    );
};

export default Certifications;
