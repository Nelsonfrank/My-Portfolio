import React from 'react'
import Navigation from '../../components/navigation'
import Introduction from './components/introduction/Introduction'
import Layout from '../../components/Layout'
import Work from '../Work'
import Experience from '../Experience'
import './Home.css'
import Skill from '../Skill'

const Home = () => {
    return ( 
       <section id="home">
           <div className={`bg-wallpaper`}>
          <Navigation />
          <Layout>
             <Introduction />
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