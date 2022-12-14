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
        image="https://user-images.githubusercontent.com/89993167/211213001-6c01ad3e-acfb-40a2-81b4-5b30335ec04f.png"
        alt="green iguana"
        className='project-card-image'
      />
      <CardContent className='project-card-content'>
        <Typography gutterBottom variant="h5" component="div">
         Sunrob Robotics Shop
        </Typography>
        <Typography variant="body2" color="text.secondary" className="project-card-text">
        <i>Demo Shopping Website for Sunrob Robotics (Frontend), a robotic company in Lappeenranta (Merchs / Toys)</i>
         <br></br> <br></br> <p className="project-card-tech">React | React Hooks | | Redux | Redux Toolkit | Material UI</p>
        </Typography>
      </CardContent>
      <CardActions className='project-card-content'>
        <a href='https://github.com/quanbui210/Sunrob-Robotics' className='project-card-icon'><GitHubIcon/></a> 
        <a className='project-card-icon' href='https://sunrob-robotics.vercel.app/'><OpenInNewIcon/></a>
      </CardActions>
    </Card>   
    
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
         <br></br> <br></br> <p className="project-card-tech">React | React Hooks | Firebase</p>
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
        image="https://user-images.githubusercontent.com/89993167/205606967-12a882f8-3058-412f-9ced-a01b6225276a.png"
        alt="green iguana"
        className='project-card-image'
      />
      <CardContent className='project-card-content'>
        <Typography gutterBottom variant="h5" component="div">
         Rock Paper Scissors
        </Typography>
        <Typography variant="body2" color="text.secondary" className="project-card-text">
        <i>Web RPS game, users vs computer(random choice)</i>
         <br></br> <br></br> <p className="project-card-tech">Vanilla JavaScript| Vanilla CSS | HTML</p>
        </Typography>
      </CardContent>
      <CardActions className='project-card-content'>
        <a href='https://github.com/quanbui210/Rock-Paper-Scissors/tree/master' className='project-card-icon'><GitHubIcon/></a> 
        <a className='project-card-icon' href='https://rock-paper-scissors-one-lilac.vercel.app/'><OpenInNewIcon/></a>
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