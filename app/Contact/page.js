import Image from 'next/image'
import styles from '../page.module.css'
import BackgroundForm from '../assets/BackgroundForm.jpg'
import blue from '../assets/blue_0_105_255.jpg'
import smartphone from '../assets/smartphone.png'
import position from '../assets/position.png'
import Link from 'next/link'

export default function Contact() {
  return (
    <main className={styles.main} >
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
                  <Link className="nav-link active fs-6 text-nowrap" style={{paddingLeft: "1.5vw",}} href="/Contact">ME CONTACTER</Link>
                </div>
              </div>
            </div>
          </nav>
      <div className="card text-bg-dark" >
          <Image className="card-img"
                src={BackgroundForm}
                alt="Picture of the author"
                sizes="100%"
                style={{
                  width: '100%',
                  height: '150vh',
                  position: 'absolute',
                }}
          />
          <Image className="card-img"
                src={blue}
                alt="Picture of the author"
                sizes="100%"
                style={{
                  width: '100%',
                  height: '150vh',
                  position: 'relative',
                  opacity: "0.5",
                }}
          />
          <div className="card-img-overlay">
          <div className="card" style={{width: "90%", height: "90%",
          margin: "5%", padding :"2%",
        }}>
            <div className="card-body">
              <div className="d-flex flex-column" id="blockTitle" > 
                <h2 id="title"  className="d-flex justify-content-center fs-1">ME CONTACTER</h2>
                <p className="d-flex justify-content-center fs-5">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
              </div>  
                <div className="row">
                  <div className="col-lg-6">
                    <div id="blockSubtitle" >
                      <h3>Formulaire de contact</h3>
                    </div>  
                    <div id="error-message" style={{display: "none"}} class="mt-4 mx-auto max-w-4xl">        
                      <div class="rounded-md bg-red-50 p-4">
                        <div class="flex">
                          <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-red-400" x-description="Heroicon name: mini/x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd"></path>
                            </svg>
                          </div>
                          <div class="ml-3">
                            <h3 class="text-sm font-medium text-red-800">Tous les champs doivent être remplis</h3>
                          </div>
                        </div>
                      </div>          
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Votre nom" />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Votre adresse Email" />
                    </div>
                    <div className="mb-3">
                      <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="Votre numéro de téléphone" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" id="exampleFormControlInput4" placeholder="Sujet" />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Votre message"></textarea>
                    </div>

                    <div className="mb-3 d-flex justify-content-center">
                      <input type="submit" value="Envoyer" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="exampleFormControlInput5" />
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Élement envoyé</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div id="blockSubtitle" >
                      <h3>Mes coordonnées</h3>
                    </div> 
                    <address>
                    <Image class="float-start"
                          src={position}
                          alt="Picture of the author"
                          sizes="100%"
                          style={{
                            width: '20px',
                            height: 'auto',
                          }}
                    />
                    <p style={{paddingLeft: "1.5vw"}}> 
                      <a href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu"
                        target="_blank"  
                        title="Lien adresse IRL"
                        class="lien"
                        style={{textDecoration: 'none',color: '#000', fontWeight: 'bold',}}>
                        40 Rue Laure Diebold, 69009 Lyon, France
                      </a>
                  </p>
                      <Image class="float-start"
                          src={smartphone}
                          alt="Picture of the author"
                          sizes="100%"
                          style={{
                            width: '20px',
                            height: 'auto',
                          }}
                      />
                      <p style={{paddingLeft: "1.5vw"}}><a href="tel:0620304050" target="_blank"  style={{textDecoration: 'none',color: '#000', fontWeight: 'bold',}}>06 20 30 40 50</a></p>
                    </address>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754123!2d4.79640397686393!3d45.778665712401136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1696522834162!5m2!1sfr!2sfr"
                     style ={{width: '100%', 
                     height: '100%',
                     frameborder: "0", 
                     allowfullscreen: "", 
                     loading: "lazy" ,
                     referrerpolicy: "no-referrer-when-downgrade",}}
                     id="map">
                     </iframe>
                  </div>  
                </div>
            </div>
          </div>
          </div>
        </div>
    </main>
  )
}
