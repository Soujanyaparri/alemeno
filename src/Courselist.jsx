
import React,{useState} from 'react'
import data from './Data'
import img from './image/OIP.jpeg'
import './App.css';
import Coursedetails from './Coursedetails';

function Courselist() {

   
        <>
        </>
    
        {
            return data.map((CUR)=>
            {
           return(
                <>

                      <div className="list">
                        <div >
                          
                      <div ><button>
                          <img src={img} ></img>
                          </button>
                        </div>
                        
                        <div>
                        <a href='Coursedetails' >
                        <b >{CUR.description}</b></a>
                        </div>
                        <div className='container'>
                        {CUR.name}
                        <div>
                          {CUR.instructor}
                        </div>
                        <div>{CUR.duration}</div>
                      </div>
                      </div>
                        <div className='box'>
                      <div><button>
                          <img src={img} ></img></button>
                        </div>
                        
                        <div className="containe"> 
                        <a href='Coursedetails' >
                        <b className='Des'>{CUR.description}</b></a>
                        </div>
                        <div className='container'>
                        {CUR.name}
                        <div>
                          {CUR.instructor}
                        </div>
                        <div>{CUR.duration}</div>
                      </div>
                      </div>
                      <div className='box'>
                      <div ><button>
                          <img src={img} ></img></button>
                        </div>
                        
                        <div className="containe"> 
                        <a href='Coursedetails' >
                        <b className='Des'>{CUR.description}</b></a>
                        </div>
                        <div className='container'>
                        {CUR.name}
                        <div>
                          {CUR.instructor}
                        </div>
                        <div>{CUR.duration}</div>
                      </div>
                      </div>
                      <div className='box'>
                      <div className="img-box"><button>
                          <img src={img} ></img></button>
                        </div>
                        
                        <div className="containe"> 
                        <a href='Coursedetails' >
                        <b className='Des'>{CUR.description}</b></a>
                        </div>
                        <div className='container'>
                        {CUR.name}
                        <div>
                          {CUR.instructor}
                        </div>
                        <div>{CUR.duration}</div>
                      </div>
                      </div>
                    </div>
                </>
           )
           }
            )
    
           } 
    
}
           
     
    

export default Courselist