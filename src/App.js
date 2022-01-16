import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';



function App() {
  
  
  
  document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("mybutton").click();
 });
 const [active, setActive] = useState("Challenges");
  
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path='/' exact />

      </Routes>
    </Router>
    <div className='notNavbar'>
    <div className='greenBox'>
      <h6>Welcome, Jamal Ahmadzai</h6>
      </div>
      <div class='recommended'>
        <h5>Recommended Challenges</h5>
        <p>These challenges are recommended to you based on your profile.
          <br></br>
          Follow some <a href='/'>tags</a> in your profile to get recommended challenges.
        </p>
        </div>
        <div class='recommended'>
        <h5>Recommended Labs</h5>
        <p>These labs are recommended to you based on your profile.
          <br></br>
          Follow some <a href='/'>tags</a> in your profile to get recommended labs.
        </p>
        </div>
        <div class='recommended'>
        <h5>Recommended Resources</h5>
        <p>These Resources are recommended to you based on your profile.
          <br></br>
          Follow some <a href='/'>tags</a> in your profile to get recommended resources.
        </p>
        </div>
        <div className='exploreRecommended'>
          Explore
        </div>
        <div className='exploreRecommended'>
          <div className='buttons'>
          
          <button id='projectsButton' onClick = {() => setActive("Projects")}>Projects</button>
          <button id='labsButton' onClick = {() => setActive("Labs")} >Labs</button>
          <button id='challengesButton' onClick = {() => setActive("Challenges")} >Challenges</button>
          </div>
        </div>
        <div className='recommendedTab'>
          {active === "Challenges" && <><img src='https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/2peDx5P7T8CDcNZIwa6AW2bqp.png' alt='dummyImage'></img>
          <h4>Sample Challenge</h4>
          <p2>Challenge</p2>
          <p>Sample Challenge Text</p>
          <a href="https://preprlabs.org/challengeManager/product-manager-challenge-5-product-release-2">View</a>
          </>
          }
          {active === "Labs" && <><img src='https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/labs/xWkGztTZCHwvFsZS3pUM8zUde.jpg' alt='dummyImage'></img>
          <h4>Sample Lab</h4>
          <p2>Lab</p2>
          <p>Sample Lab Text</p>
          <a href="https://preprlabs.org/challengeManager/product-manager-challenge-5-product-release-2">View</a>
          </>
          }
          {active === "Projects" && <><img src='https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/projects/6.png' alt='dummyImage'></img>
          <h4>Sample Project</h4>
          <p2>Project</p2>
          <p>Sample Project Text</p>
          <a href="https://preprlabs.org/challengeManager/product-manager-challenge-5-product-release-2">View</a>
          </>
          }
    </div>
    <div className='dividingLine'></div>
        
        




        </div>
      </>
      
  );
  
  
}

export default App;
