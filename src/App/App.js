import logo from './logo.svg';
//import './App.css';
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

function App() {
  const title = 'hello'
  const description = "hey"
  return (
    <Box width={256}>
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
        <Image src={logo} />
        <Box px={2}>
          <Heading as='h3'>
            {title}
          </Heading>
          <Text fontSize={0}>
            {description}
          </Text>
        </Box>
      </Card>
    </Box>
  );
}

export default App;
