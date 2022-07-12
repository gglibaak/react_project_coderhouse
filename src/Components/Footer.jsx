import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
          <Typography>
            EL FOOTER
          </Typography>
          
        </Container>
      </Box>
    
        </>
    )
}

export default Footer