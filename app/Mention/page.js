import styles from '../page.module.css'
import world from '../assets/globe.png'
import smartphone from '../assets/smartphone.png'
import message from '../assets/message.png'
import Image from 'next/image'
import Link from 'next/link'


export default function Mention() {
  return (
    <main className={styles.main}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark" style={{paddingLeft: "4vw",}}>
            <div className="container-fluid" >
              <a className="navbar-brand col-lg-5 col-xl-6 col-xxl-7 fs-3" href="/">JOHN DOE</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav col-lg-7 col-xl-6 col-xxl-5">
                  <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} aria-current="page" href="/">ACCUEIL</Link>
                  <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} href="/Service">SERVICES</Link>
                  <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} href="/Realisation">RÉALISATIONS</Link>
                  <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} href="/Blog">BLOG</Link>
                  <Link className="nav-link fs-6 text-nowrap" style={{paddingLeft: "1.5vw",}} href="/Contact">ME CONTACTER</Link>
                </div>
              </div>
            </div>
          </nav>
      <div className="d-flex justify-content-center fs-1" id="blockTitle" >
            <h2 id="title" >MENTIONS LÉGALES</h2>
        </div>
        <div className="accordion" id="accordionExample" style={{padding: "4vw",}}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Éditeur du site
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <h4>John Doe</h4>
                <p>40 Rue Laure Diebold <br/> 69009 Lyon, France</p>
                <Image class="float-start"
                    src={smartphone}
                    alt="Picture of the author"
                    sizes="100%"
                    style={{
                      width: '20px',
                      height: 'auto',
                    }}
                />
                <p style={{paddingLeft: "1.5vw"}}><a href="tel:0620304050" style={{textDecoration: 'none',color: '#0d6efd', fontWeight: 'bold',}}>06 20 30 40 50</a></p>
                <Image class="float-start"
                    src={message}
                    alt="Picture of the author"
                    sizes="100%"
                    style={{
                      width: '20px',
                      height: 'auto',
                    }}
                />
                <p style={{paddingLeft: "1.5vw"}}><a href="mailto:john.doe@gmail.com" style={{textDecoration: 'none',color: '#0d6efd', fontWeight: 'bold',}}>john.doe@gmail.com</a></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               Hébergeur
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <h4>Vercel</h4>
                <Image class="float-start"
                    src={world}
                    alt="Picture of the author"
                    sizes="100%"
                    style={{
                      width: '20px',
                      height: 'auto',
                    }}
                />
                <p style={{paddingLeft: "1.5vw"}}><a href="https://www.netlify.com/" style={{textDecoration: 'none',color: '#0d6efd', fontWeight: 'bold',}}www.vercel.com</a></p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Crédits
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <h4>Crédits</h4>
                <p>Site développé par John Doe, étudiant du CEF</p>
                <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/" style={{textDecoration: 'none',color: '#0d6efd', fontWeight: 'bold',}}>Pixabay</a>.</p>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
