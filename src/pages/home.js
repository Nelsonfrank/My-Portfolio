import React from 'react'
import Navigation from '../components/navigation'
import Layout from '../components/Layout'
import Work from './Work'
import Experience from './Experience'
import '../styles/Home.css'
import Skill from './Skill'

const Home = () => {
    return ( 
       <section id="home">
           <div className={`bg-wallpaper`}>
          <Navigation />
          <Layout>
            <div className={`portfolio-context`}>
                <h2>Howdy, My Name is Nelson Frank</h2>
                <p>Front-End Developer</p>
            </div>
          </Layout>
           </div>
           <div className="work">
               <Work />
           </div>
           <div className="experience">
               <Experience />
           </div>
           <div className="skill">
                <Skill />
           </div>
       </section>
     );
}
 
export default Home;