import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';

const Item = ( { instrumentItems }) => {

    return (
         <>
         <Stack direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 4, sm: 2, md: 4 }}
                sx={{mx: 10}}>
         {instrumentItems.map((instrumentItem) =>{
             return (
                 <>
                <Card sx={{ mb: 1}}
                      key={instrumentItem.id}>
                <CardMedia
                    component="img"
                    alt={instrumentItem.title}
                    height="140"
                    image={instrumentItem.pictureUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {instrumentItem.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={ {mb: 5}}>
                    {instrumentItem.description}
                    </Typography>
                    <Typography variant="h6" color="black" >
                    Precio: ${instrumentItem.price}
                    </Typography>
                </CardContent>
                <Button variant="contained" sx={{ mb: 5 }}style={{backgroundColor: "#FF2C32"}}>Ver Más</Button>
                </Card>
                 </>
             )
         })}
         </Stack>
     </>
    
    )

}

export default Item