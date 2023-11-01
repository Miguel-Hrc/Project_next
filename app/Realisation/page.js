import Image from 'next/image'
import styles from '../page.module.css'
import FreshFood from '../assets/FreshFood.jpg'
import backgroundTemplate from '../assets/BackgroundTemplate.jpg'
import RestaurantAkira from '../assets/RestaurantAkira.jpg'
import EspaceBienEtre from '../assets/EspaceBienEtre.jpg'
import Link from 'next/link'

export default function Realisation() {
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
              <Link className="nav-link active fs-6" style={{paddingLeft: "1.5vw",}} href="/Realisation">RÉALISATIONS</Link>
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
            <h2 id="title" className="d-flex justify-content-center fs-1">PORTFOLIO</h2>
            <p className="d-flex justify-content-center fs-5">voici quelques-unes de mes réalisations.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{padding: "4vw",}}>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                src={FreshFood}
                alt="Picture of the author"
                sizes="auto"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">Fresh Food</h5>
                <p className="card-text d-flex justify-content-center">Réalisation d'un site avec commande en ligne.</p>
                <div className="d-grid gap-2 col-1 mx-auto">
                  <button type="button" className="btn btn-outline-primary">Voir</button>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary d-flex justify-content-center">Site réalisé avec PHP et MySQL</small>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                  src={RestaurantAkira}
                  alt="Picture of the author"
                  sizes="auto"
                  style={{
                    width: 'auto',
                    height: 'auto',
                  }}
              />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">Restaurant Akira</h5>
                <p className="card-text d-flex justify-content-center">Réalisation d'un site vitrine.</p>
                <div className="d-grid gap-2 col-1 mx-auto">
                  <button type="button" className="btn btn-outline-primary">Voir</button>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary d-flex justify-content-center">Site réalisé avec WordPress</small>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                      src={EspaceBienEtre}
                      alt="Picture of the author"
                      sizes="auto"
                      style={{
                        width: 'auto',
                        height: 'auto',
                      }}
              />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">Espace bien-être</h5>
                <p className="card-text d-flex justify-content-center">Réalisation d'un site vitrine pour un practicien de bien-être</p>
                <div className="d-grid gap-2 col-1 mx-auto">
                  <button type="button" className="btn btn-outline-primary">Voir</button>
                </div>      
              </div>
              <div className="card-footer">
                <small className="text-body-secondary d-flex justify-content-center">Site réalisé en HTML/CSS</small>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
