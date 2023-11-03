"use client";
import styles from '../page.module.css'
import React, { useState, useEffect } from "react";
import Link from 'next/link'


export default function Github() {
 const [user, setUser] = useState([]);
 const getUser = async () => {
 const res = await fetch("https://api.github.com/users/github-john-doe");
 const json = await res.json();

 setUser(json);
 };
 useEffect(() => {  
 getUser();
 }, []);

 return (

 <div className={styles.main}>
<       nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark" style={{paddingLeft: "4vw",}}>
            <div className="container-fluid" >
              <a className="navbar-brand col-lg-5 col-xl-6 col-xxl-7 fs-3" href="/">JOHN DOE</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav col-lg-7 col-xl-6 col-xxl-5">
                  <Link className="nav-link active fs-6" style={{paddingLeft: "1.5vw",}} aria-current="page" href="/">ACCUEIL</Link>
                  <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} href="/Service">SERVICES</Link>
                  <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} href="/Realisation">RÉALISATIONS</Link>
                  <Link className="nav-link fs-6" style={{paddingLeft: "1.5vw",}} href="/Blog">BLOG</Link>
                  <Link className="nav-link fs-6 text-nowrap" style={{paddingLeft: "1.5vw",}} href="/Contact">ME CONTACTER</Link>
                </div>
              </div>
            </div>
          </nav>
    <main className="flex text-center">
            <article key={user.id} className="card">
                <h2>{user.login}</h2>
                <p>{user.name}</p>
                <img src={user.avatar_url} alt="{user.login}" className="d-grid gap-2 col-1 mx-auto" style={{
                      width: '150px',
                      height: 'auto',
                    }} />
                <p>{user.bio}</p>
                <p>Abonnés : {user.followers}</p>
                <p>Abonnements : {user.following}</p>
                <p>Créé le : {user.created_at}</p>
                <p>Modifié le : {user.updated_at}</p>
                <p> URL repositories : <a href="{user.html_url}" target="_blank"> {user.html_url}</a></p>

            </article>
    </main>
</div>
);}
