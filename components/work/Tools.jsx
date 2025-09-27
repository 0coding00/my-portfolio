'use client'

import { 
  Box, 
  Container, 
  Typography, 
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
// Import icons
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import javascriptIcon from '../assets/javascript.jpg';
import typescriptIcon from '../assets/typescript.png';
import nextjsIcon from '../assets/nextjs.png';
import reactIcon from '../assets/react.png';
import tailwindIcon from '../assets/tailwind.png';
import reduxIcon from '../assets/redux.png';
import zodIcon from '../assets/zod.png';
import githubIcon from '../assets/github.jpg';
import gitlabIcon from '../assets/gitlab.png';
import firebaseIcon from '../assets/firebase.png';
import mongodbIcon from '../assets/mongodb.png';
import nodejsIcon from '../assets/nodejs.png';

// Animation keyframes

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: '2rem',
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '12px 16px',
  borderRadius: '8px',
  marginBottom: '8px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(33, 150, 243, 0.08)',
    transform: 'translateX(8px)',
  },
}));

const ToolIcon = styled('img')({
  width: '32px',
  height: '32px',
  objectFit: 'contain',
  borderRadius: '4px',
});

const ToolName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '1rem',
  color: theme.palette.text.primary,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '2rem',
  color: 'white',
  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
}));

// Simple tools array
const tools = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Next.js', icon: nextjsIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'Zod', icon: zodIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'GitLab', icon: gitlabIcon },
  { name: 'Firebase', icon: firebaseIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Node.js', icon: nodejsIcon },
];

const ToolsSection = () => {
  return (
    <Box sx={{ 
      py: 8, 
      background: '#eee',
      minHeight: '100vh',
    }}>
      <Container maxWidth="md">
        <Fade in={true} timeout={1000}>
          <SectionTitle variant="h2">
            My Tools & Technologies
          </SectionTitle>
        </Fade>
        
        <Fade in={true} timeout={1200}>
          <StyledPaper>
            <List>
              {tools.map((tool, index) => (
                <StyledListItem key={tool.name}>
                  <ListItemIcon>
                    <ToolIcon 
                      src={tool.icon} 
                      alt={tool.name}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <ToolName>
                      {tool.name}
                    </ToolName>
                  </ListItemText>
                </StyledListItem>
              ))}
            </List>
          </StyledPaper>
        </Fade>
      </Container>
    </Box>
  );
};

export default ToolsSection;
