import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Projects.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function Projects() {
  return (
    <div className="card-container"> 
    
    <Card className="project-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://user-images.githubusercontent.com/89993167/204028032-35efc18f-37f6-4cab-a483-f5cdb073d5b4.png"
        alt="green iguana"
        className='project-card-image'
      />
      <CardContent className='project-card-content'>
        <Typography gutterBottom variant="h5" component="div">
         Food Order Website
        </Typography>
        <Typography variant="body2" color="text.secondary" className="project-card-text">
        <i>A web application for food ordering service, features including: add to cart, remove form cart, total price, register form...</i>
         <br></br> <br></br> <p className="project-card-tech">React | React Hooks | Vanilla CSS</p>
        </Typography>
      </CardContent>
      <CardActions className='project-card-content'>
        <a href='https://github.com/quanbui210/food-order' className='project-card-icon'><GitHubIcon/></a> 
        <a className='project-card-icon' href='https://food-order-five.vercel.app/'><OpenInNewIcon/></a>
      </CardActions>
    </Card>

     <Card className="project-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://user-images.githubusercontent.com/89993167/201920859-4ad8cd06-213f-4612-ad98-b89ae9019f74.png"
        alt="green iguana"
        className='project-card-image'
      />
      <CardContent className='project-card-content'>
        <Typography gutterBottom variant="h5" component="div">
         Movie Data App
        </Typography>
        <Typography variant="body2" color="text.secondary" className="project-card-text">
        <i>A Website that allows user to add movie data to server(Firebase Realtime database)</i>
         <br></br> <br></br> <p className="project-card-tech">React | React Hooks | Firebase</p>
        </Typography>
      </CardContent>
      <CardActions className='project-card-content'>
        <a href='https://github.com/quanbui210/MovieApp' className='project-card-icon'><GitHubIcon/></a> 
        <a className='project-card-icon' href='quanbuiii.vercel.app '><OpenInNewIcon/></a>
      </CardActions>
    </Card>   
    <Card className="project-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://user-images.githubusercontent.com/89993167/199535913-de636ad2-5eb6-4183-9449-b6ec4509c32e.png"
        alt="green iguana"
        className='project-card-image'
      />
      <CardContent className='project-card-content'>
        <Typography gutterBottom variant="h5" component="div">
          Weather App
        </Typography>
        <Typography variant="body2" color="text.secondary" className="project-card-text">
        <i>A Weather app where users can get the weather data from their current location as well as search for weather information of any city in the world.</i>
         <br></br> <br></br> <p className="project-card-tech"s>React | React Hooks | Axios | Material UI | Bootstrap</p>
        </Typography>
      </CardContent>
      <CardActions className='project-card-content'>
        <a href='https://github.com/quanbui210/Weather-App-React' className='project-card-icon'><GitHubIcon/></a> 
        <a className='project-card-icon' href='https://weather-app-api-assignment.netlify.app/'><OpenInNewIcon/></a>
      </CardActions>
    </Card>
    <Card className="project-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://user-images.githubusercontent.com/89993167/201534757-597a168e-9e8b-45b8-906e-9d13b247138c.png"
        alt="green iguana"
        className='project-card-image'
      />
      <CardContent className='project-card-content'>
        <Typography gutterBottom variant="h5" component="div">
         Countries List App
        </Typography>
        <Typography variant="body2" color="text.secondary" className="project-card-text">
        <i>An app that shows the basic information and current weather data of all countries in the world.</i>
         <br></br> <br></br> <p className="project-card-tech">React | React Hooks | Axios | Bootstrap</p>
        </Typography>
      </CardContent>
      <CardActions className='project-card-content'>
        <a href='https://github.com/quanbui210/Countries-list' className='project-card-icon'><GitHubIcon/></a> 
        <a className='project-card-icon' href='https://countries-list-five.vercel.app/'><OpenInNewIcon/></a>
      </CardActions>
    </Card>
    {/* <Card className="project-card" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://user-images.githubusercontent.com/89993167/201538276-c80af3f2-a7b4-4bc2-b6f7-dc88693e2967.png"
        alt="green iguana"
        className='project-card-image'
      />
      <CardContent className='project-card-content'>
        <Typography gutterBottom variant="h5" component="div">
         Form Validation
        </Typography>
        <Typography variant="body2" color="text.secondary" className="project-card-text">
        <i>Register form with specific rules, logic and validations.</i>
         <br></br> <br></br> <p className="project-card-tech">JavaScript | HTML | CSS</p>
        </Typography>
      </CardContent>
      <CardActions className='project-card-content'>
        <a href='https://github.com/quanbui210/Form-Validation/tree/master' className='project-card-icon'><GitHubIcon/></a> 
        <a className='project-card-icon' href='https://form-validation-jade-six.vercel.app/'><OpenInNewIcon/></a>
      </CardActions>
    </Card> */}
    <h3 className='project-card-seemore'>See more projects <a className='tag' href="https://github.com/quanbui210">here</a></h3>
    </div>
  );
}