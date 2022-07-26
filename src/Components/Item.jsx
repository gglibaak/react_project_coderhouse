import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import{ Link } from 'react-router-dom'

const Item = ( { instrumentItems } ) => {

    const brandGibson = "https://1000marcas.net/wp-content/uploads/2020/02/Gibson-Logo.jpg"
    const brandFender = "http://www.userlogos.org/files/logos/macleod.mac/fender.1.o.png"

    return (
         <>
         <Stack direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 4, sm: 2, md: 4 }}
                sx={{mx: 13,
                    margin: {xs:'0 15%', md: '0 80px'},
                    
                }}
                display={{ sx: 'row', md: 'grid'}}
                style={{gridTemplateColumns: 'repeat(4, 1fr)',
                        gridTemplateRows: 'repeat(auto, auto)',
                        }}>
         {instrumentItems.map((instrumentItem) =>{
             return (
                 <div key={instrumentItem.id}  >
                <Card style={{boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)"}} sx={{ mb: {xs:4, sm:4, md:4}, margin: {xs:'0 auto'},width: {xs: 280, sm: 280, md: 250}, height: {xs: 500, sm: 500, md: 420} }}>
                <CardMedia
                    component="img"
                    alt={instrumentItem.title}
                    image={instrumentItem.pictureUrl}                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: 14,sm: 15}, fontWeight: '800', width: { sm:200, md: 200 }, }}>
                    {instrumentItem.title}
                    
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={ {mb: 5} }>
                    {instrumentItem.shortDescription}
                    </Typography>
                    <Avatar style={{ margin: '15px auto', boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)" }} alt={instrumentItem.brand} src={instrumentItem.brand === 'Gibson USA' ? brandGibson : brandFender} />
                    <Divider variant="middle" sx={{mb:2}}/>
                    <Typography variant="h6" color="black" >
                    ${instrumentItem.price}
                    </Typography>
                </CardContent>
                <Link to={`/item/${instrumentItem.id}`} style={{textDecoration: 'none'}}>
                    <Button variant="contained" sx={{ mb: 5 }}style={{backgroundColor: "#FF2C32",  }}>Ver Más</Button>
                </Link>
                </Card>
                 </div>
             )
         })}
         </Stack>
     </>
    
    )

}

export default Item