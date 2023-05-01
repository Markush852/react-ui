import './App.css';
import React from 'react';
import { spacing } from '@mui/system';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button
} from '@mui/material';

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import './App.css';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
  return (

  <>

      <CssBaseline />
      
      {/* Navigation Bar */}
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className="icon" />
          <Typography variant="h6">Photo Gallery</Typography>
        </Toolbar>
      </AppBar>

    <main>

        {/* Hero Section */}
        <div className = "container"> 

         
          <Container maxWidth="sm"> 
         
              <Typography
                    variant="h3"
                    align="center"
                    color="textPrimary"
                    gutterBottom
              >
                  My Photo Gallery
              </Typography>

         
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Bienvenidos a mi perfil donde voy a ir desplegando varias de mis obras
                de arte y diseño creadas gracias a mis experiencias en el mundo de la informática
                y desarrollo web.Espero poder darles una pieza de inestimable valor así como el reconocimiento
                merecido por la comunidad del desarrollo web gracias a ellos es que llegué acá
              </Typography>


              {/* Buttons */}
              <div className="buttons">

                <Grid container spacing={2} justifyContent="center">

                  <Grid item>
                        <Button variant="contained" color="primary">
                          See more photos
                        </Button>
                  </Grid>

                  <Grid item>
                        <Button variant="outlined" color="primary">
                            Follow Me
                        </Button>
                  </Grid>

                </Grid> 

               </div>
               {/* End Buttons */}
    
          </Container>
     
        </div>
        {/* End Hero Section */}


        {/* Gallery Section */}
        <Container className="card">

          <Grid className="cardGrid" container spacing={4}>


            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>

                <Card>

                  <CardMedia className="cardMedia" image="https://source.unsplash.com/random" title="Image Title"/>

                  <CardContent className="cardContent">

                    <Typography variant="h5" gutterBottom>
                      Foto {card}
                    </Typography>

                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam, voluptatem!
                    </Typography>



                  </CardContent>

                  <CardActions>
                    
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>

                  </CardActions>


                  
                </Card>


              </Grid>)
              
              )}




          </Grid>

        </Container>

    </main>

    {/* Footer */}
    <footer className="footer" >
        <Typography variant='h6' align='center' gutterBottom>
          Más información
        </Typography>
        <Typography variant='subtitle1' align='center' color="textSecondary" my={2}>
          Todos los derechos reservados
        </Typography>
        <Typography variant='subtitle1' align='center' color="textSecondary" my={2}>
          Politica de privacidad
        </Typography>
        <Typography variant='subtitle1' align='center' color="textSecondary" my={2}>
          Contacto: <a href="mailto:Xf4hV@example.com" >Xf4hV@example.com</a>
        </Typography>
      </footer>

  </>

  );
}

export default App;
