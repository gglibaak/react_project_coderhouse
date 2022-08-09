import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return(
        <>
        <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: "#EEEEEE",
          position: 'absolute',
          bottom: '0',
          width: '100%',
          
        }}
      >
        <Container maxWidth="sm">
          <Link href ="https://github.com/gglibaak">
            <GitHubIcon style={{color: 'black', fontSize: '35px'}} ></GitHubIcon>
          </Link>
          
        </Container>
      </Box>
    
        </>
    )
}

export default Footer