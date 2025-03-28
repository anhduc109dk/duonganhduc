import React from 'react';
import { Box, Flex, Heading, Text, Image, Link, HStack, Icon } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

import avatarImage from '../assets/img_avatar.jpg'; // Import the image
const Header: React.FC = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={6}>
      <Box mr={{ base: 0, md: 6 }} mb={{ base: 4, md: 0 }}>
        <Image
          src={avatarImage}
          alt="Dương Anh Đức"
          boxSize="150px"
          objectFit="fill"
          borderRadius="full"
          border="4px solid"
          borderColor="brand.500"
        />
      </Box>

      <Box flex="1">
        <Heading as="h1" size="xl" mb={1}>DƯƠNG ANH ĐỨC</Heading>
        <Text fontSize="xl" fontWeight="bold" color="brand.500" mb={3}>
          Mobile Developer
        </Text>

        <HStack spacing={4} mb={2} wrap="wrap">
          <Flex align="center">
            <Icon as={FaMapMarkerAlt} mr={2} color="gray.600" />
            <Text fontSize="sm">236/25/6 Điện Biên Phủ, P.17, Q.Bình Thạnh, TP.HCM</Text>
          </Flex>
        </HStack>

        <HStack spacing={4} mb={2} wrap="wrap">
          <Flex align="center">
            <Icon as={FaPhone} mr={2} color="gray.600" />
            <Text fontSize="sm">0703762403</Text>
          </Flex>
          <Flex align="center">
            <Icon as={FaEnvelope} mr={2} color="gray.600" />
            <Text fontSize="sm">anhductmd509dk@gmail.com</Text>
          </Flex>
        </HStack>

        <HStack spacing={4}>
          <Link href="https://github.com/anhduc109dk" isExternal>
            <Flex align="center">
              <Icon as={FaGithub} mr={2} color="gray.700" />
              <Text fontSize="sm">GitHub</Text>
            </Flex>
          </Link>
          <Link href="https://www.linkedin.com/in/duonganhduc/" isExternal>
            <Flex align="center">
              <Icon as={FaLinkedin} mr={2} color="blue.600" />
              <Text fontSize="sm">LinkedIn</Text>
            </Flex>
          </Link>
          <Link href="https://www.linkedin.com/in/duonganhduc/" isExternal>
            <Flex align="center">
              <Icon as={FaGlobe} mr={2} color="blue.500" />
              <Text fontSize="sm">Website</Text>
            </Flex>
          </Link>

        </HStack>
      </Box>
    </Flex>
  );
};

export default Header;
