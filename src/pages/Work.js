import React from "react"
import Card from '../components/card'
import '../styles/Work.css'
import img from '../images/card-img.jpg'

const Work =()=>{
    return(
        <> 
        <h1 className="work-header" id="#work">Work</h1>
        <div className="work-container" >
            <Card image={img} name={`Shillingi-Art-work`} language={`Reactjs`}/>
            <Card image={img} name={`Shillingi-Art-work`} language={`Reactjs`}/>
            <Card image={img} name={`Shillingi-Art-work`} language={`Reactjs`}/>
            <Card image={img} name={`Shillingi-Art-work`} language={`Reactjs`}/>
            <Card image={img} name={`Shillingi-Art-work`} language={`Reactjs`}/>
            <Card image={img} name={`Shillingi-Art-work`} language={`Reactjs`}/>
            <Card image={img} name={`Shillingi-Art-work`} language={`Reactjs`}/>

        </div>
        </>
    )
}

export default Work;