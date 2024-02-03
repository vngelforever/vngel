import React from 'react';
import './index.css';
//PROJECTS
import Nocturnal_logo from './img/Projects/Nocturnal_logo.png'
import Vngelhill_logo from './img/Projects/Vngelhill_logo.png'
import Goth_Vngel_Logo from './img/Projects/Goth_Vngel_Logo.png'
//Logo
import LogoNoBackground from './img/LogoNoBackground.png'
import Infra_red_background_removebg_preview from './img/Infra_red_background_removebg_preview.png'


//Header Bar
function Header() {
  return (
    <section>
        <div >
          <div className='menubar'>
            <div>
              <p className='menubar-title'>VNGEL</p>
            </div>
            <div className='menubar-underline'></div>
          </div>
        </div>
    </section>
  );
}

//Head Section of the index page
function HeadSection() {
  return (
    <section>
      {/* HOME HEAD SECTION */}
      <div className="home">
        <div>
          <div className='home-slogan'>
            <p>00000000000</p>
          </div>
        </div>
      </div>
    </section>
  );
}

//About section on the index page

function AboutSection(){

  return (
    //About Section
    <section>
      <div className='about-section'>
        <div className='about-section-block'>
            <p>VNGELFOREVER VNGELFOREVER VNGELFOREVER VNGELFOREVER 
              VNGELFOREVER VNGELFOREVER VNGELFOREVER VNGELFOREVER 
              VNGELFOREVER VNGELFOREVER</p>
        </div>
        <div>
          <div className='about-section-desc'>
            <img src={Goth_Vngel_Logo} alt='Logo' className='about-logo'></img>
            <div className='about-info'>
              <p>Welcome to vngel. We would like to show you some of the work we have, but you'd need to be ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

//Projects section

function VngelProjects(){
  return(
    <section>
      <div>
        <h2 className='sub-heading'>EVENTS</h2>
      </div>
      <div className='project-div'>
        {/* NOCTURNAL */}
        <div className='projects'>
          <a href='https://nocturnalforever.github.io/nocturnal/' target='_blank'>
          <button type='button' className='project-logos' id='project1'></button>
          </a>        
        {/* VNGELHILL */}
          <button type='button' className='project-logos' id='project2'></button>
        </div>
      </div>
    </section>
  )
}

//CLOTHING SECTION
function Clothing(){
  return (
    <section>
      <div className='clothing-section'>
        <div>
          <h3 className='sub-heading'>CLOTHING</h3>
        </div>
        <div className='clothing-div'>
          {/* Goth Vngel */}
          <button type='button' className='clothing-buttons'>Goth Vngel</button>
          <button type='button' className='clothing-buttons'>Nude Vngel</button>
          <button type='button' className='clothing-buttons'>No More Vngels</button>
        </div>
      </div>
    </section>
  )
}

//Footer
function Footer(){
  return(
    <section>
      <footer className='footer'>
        <p>copyright of Vngel @2024</p>
      </footer>
    </section>
  )
}

function Index(){
  return(
    <section>
      <div>
        <Header/>
        <HeadSection />
        <AboutSection />
        <VngelProjects />
        <Clothing />
        <Footer />
      </div>
    </section>
  )
}
export {Index};
