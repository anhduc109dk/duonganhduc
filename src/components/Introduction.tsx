import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

const Introduction: React.FC = () => {
  return (
    <Box mb={6}>
      <Heading as="h2" size="md" mb={2} pb={1} borderBottom="2px solid" borderColor="brand.500">
        GIỚI THIỆU
      </Heading>
      <Text>
        Tôi là một lập trình viên Mobile có hơn 1 năm kinh nghiệm phát triển ứng dụng đa nền tảng bằng Flutter. Tôi có
        kiến thức vững vàng về UI/UX, state management (Bloc, GetX, Provider) và tích hợp các dịch vụ như Firebase,
        Google Maps, và Payment Gateway. Ngoài mobile, tôi cũng có khả năng phát triển backend với Node.js, .NET Core
        và làm việc với cơ sở dữ liệu SQL Server, MongoDB, Firebase.
        Tôi luôn tìm kiếm cơ hội để mở rộng kiến thức, tối ưu hiệu suất ứng dụng và áp dụng các công nghệ mới để nâng
        cao trải nghiệm người dùng. Với tinh thần học hỏi và trách nhiệm, tôi mong muốn đóng góp vào những dự án chất
        lượng, có tác động thực tế đến người dùng
      </Text>
      <Divider my={4} />
    </Box>
  );
};

export default Introduction;
