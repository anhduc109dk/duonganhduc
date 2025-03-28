import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Career: React.FC = () => {
    return (
        <Box mb={6}>
            <Heading as="h2" size="md" mb={4} pb={1} borderBottom="2px solid" borderColor="brand.500">
                MỤC TIÊU NGHỀ NGHIỆP
            </Heading>

            <Text>
                Phát triển sự nghiệp trở thành <strong>Senior Mobile Developer</strong> trong 2 năm tới,
                không ngừng nâng cao kỹ năng chuyên môn, đóng góp vào các dự án công nghệ
                với giải pháp sáng tạo và hiệu quả.
            </Text>
        </Box>
    );
};

export default Career;
