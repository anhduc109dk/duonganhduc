import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Career from './components/Career';

function App() {
  return (
    <Box bg="gray.50" minH="100vh" py={5}>
      <Container maxW="4xl" bg="white" boxShadow="md" rounded="md" p={8}>
        <Header />
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Languages />
        <Career />
      </Container>
    </Box>
  );
}

export default App;
