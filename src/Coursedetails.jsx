
import React,{useState} from 'react'
import data from './Data'
import img from './image/OIP.jpeg'
import './App.css';

function Coursedetails() {
        {
            return data.map((CUR)=>
            {
           return(
                <>
                <div className='Details'>
                        <div className='box'>
                      <div className="img-box">
                          <img src={img} className=''></img>
                        </div>
                        <div className='img-box'><b>
                         Course Name:  {CUR.name}<br/></b>
                         <br/>
                        <div className='img-box'>
                          Instructor Name : {CUR.instructor}
                        </div>
                        <div>Duration : {CUR.duration}</div>
                      <div>{CUR.content}</div>
                    <div>{CUR.schedule}</div>
                    <div>location: {CUR.location}</div>
                    <br/>
                         <br/> 
                       <h2>Syllabus</h2>   
                    <b> Week: 1,<br/>
    Topic: Introduction to React Native<br/>
    Content: Overview of React Native, setting up yourdevelopment environment.
    <p>Week: 2,<br/>
    Topic: Building Your First App<br/>
    Content: Creating a simple mobile app using React Nativecomponents.</p>
    <p>Week: 3,<br/>
    Topic: React Native Props<br/>
    Content: Explain React Native Props</p>
    <p>Week: 4,<br/>
    Topic: APIs<br/>
    Content: The Geolocation API </p>

     </b>                  
                      </div>
                      </div>
                      </div>
                     
                </>
           )
           }
            )
    
           } 
           
}
         export default Coursedetails