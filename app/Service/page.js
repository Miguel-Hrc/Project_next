import Image from 'next/image'
import styles from '../page.module.css'
import codeDocument from '../assets/codeDocument.png'
import PC from '../assets/pc.png'
import backgroundTemplate from '../assets/BackgroundTemplate.jpg'
import referencement from '../assets/referencement.png'
import Link from 'next/link'

export default function Service() {
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
              <Link className="nav-link active fs-6" style={{paddingLeft: "1.5vw",}} href="/Service">SERVICES</Link>
              <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} href="/Realisation">RÉALISATIONS</Link>
              <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} href="/Blog">BLOG</Link>
              <Link className="nav-link fs-6 text-nowrap" style={{paddingLeft: "1.5vw",}} href="/Contact">ME CONTACTER</Link>
            </div>
          </div>
        </div>
      </nav>
      <Image className="card-img"
        src={backgroundTemplate}
        alt="Picture of the author"
        sizes="100vw"
        style={{
          width: '100vw',
          height: 'auto',
        }}
      />
      <div id="blockTitle" className="d-flex flex-column">      
        <h2 id="title" className="d-flex justify-content-center fs-1">MON OFFRE DE SERVICES</h2>
        <p className="d-flex justify-content-center fs-5">voici les prestations sur lesquelles je peux intervenir.</p>
      </div>
        <div className="row" style={{padding: "4vw",}}>
          <div className="col-sm-4 mb-3 mb-sm-0" id="card-hover" >
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body">
                <div className="d-grid gap-2 col-1 mx-auto">
                  <Image className="card-img"
                    src={PC}
                    alt="Picture of the author"
                    sizes="100vw"
                    style={{
                      width: '50px',
                      height: 'auto',
                    }}
                  />
                </div>  
                <div className="d-flex flex-column text-center">
                  <h5 className="fs-5">UX DESGIN</h5>
                  <p className="fs-6">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expèrience de naviguation optimale à l'internaute.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4" id="card-hover" >
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body">
                <div className="d-grid gap-2 col-1 mx-auto">
                  <Image className="card-img"
                    src={codeDocument}
                    alt="Picture of the author"
                    sizes="100vw"
                    style={{
                      width: '50px',
                      height: 'auto',
                    }}
                  />
                </div>
                <div className="d-flex flex-column text-center">
                  <h5 className="fs-5">DÉVELOPPEMENT WEB</h5>
                  <p className="fs-6">Le <strong> développement de sites web </strong> repose sur l'utilisation des languages HTML, CSS, Javascript et PHP.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4" id="card-hover" >
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body">
                <div className="d-grid gap-2 col-1 mx-auto">
                  <Image className="card-img"
                    src={referencement}
                    alt="Picture of the author"
                    sizes="100vw"
                    style={{
                      width: '50px',
                      height: 'auto',
                    }}
                  />
                </div>  
                <div className="d-flex flex-column text-center">
                  <h5 className="fs-5">RÉFÉRENCEMENT</h5>
                  <p className="fs-6">Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
