import Image from 'next/image'
import styles from '../page.module.css'
import coder from '../assets/coder.jpg'
import Product from '../assets/Product.jpeg'
import pcGoogle from '../assets/pcGoogle.jpg'
import backgroundTemplate from '../assets/BackgroundTemplate.jpg'
import responsive from '../assets/responsive.jpg'
import SEO from '../assets/SEO.jpg'
import langageCode from '../assets/langageCode.jpg'
import Link from 'next/link'

export default function Blog() {
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
              <Link className="nav-link active fs-6" style={{paddingLeft: "1.5vw",}} href="/Blog">BLOG</Link>
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
      <div className="d-flex flex-column" id="blockTitle" >    
          <h2 id="title"  className="d-flex justify-content-center fs-1">BLOG</h2>
          <p className="d-flex justify-content-center fs-5">Retrouvez ici quelques articles sur le développement web.</p>
      </div>
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{padding: "2vw",}}>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                src={coder}
                alt="Picture of the author"
                sizes="auto"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Coder son site en HTML/CSS</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-primary d-flex">Lire la suite</button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Publié le 22 août 2022</small>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                  src={Product}
                  alt="Picture of the author"
                  sizes="auto"
                  style={{
                    width: 'auto',
                    height: 'auto',
                  }}
              />
              <div className="card-body">
                <h5 className="card-title">Vendre ses produits sur le web</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-primary d-flex">Lire la suite</button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Publié le 20 août 2022</small>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                      src={pcGoogle}
                      alt="Picture of the author"
                      sizes="auto"
                      style={{
                        width: 'auto',
                        height: 'auto',
                      }}
              />
              <div className="card-body">
                <h5 className="card-title">Se positionner sur Google</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-primary d-flex">Lire la suite</button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Publié le 1 août 2022</small>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                src={responsive}
                alt="Picture of the author"
                sizes="auto"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
              <div className="card-body">
                <h5 className="card-title">Coder en responsive design</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-primary d-flex">Lire la suite</button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Publié le 31 juillet 2022</small>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                  src={SEO}
                  alt="Picture of the author"
                  sizes="auto"
                  style={{
                    width: 'auto',
                    height: 'auto',
                  }}
              />
              <div className="card-body">
                <h5 className="card-title">Techniques de référencement</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-primary">Lire la suite</button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Publié le 30 juillet 2022</small>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card h-100">
              <Image className="card-img-top"
                      src={langageCode}
                      alt="Picture of the author"
                      sizes="auto"
                      style={{
                        width: 'auto',
                        height: 'auto',
                      }}
              />
              <div className="card-body">
                <h5 className="card-title">Apprendre à coder</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-primary">Lire la suite</button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Publié le 12 juillet 2022</small>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
