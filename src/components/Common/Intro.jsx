import React from 'react';
import Link from 'next/link';

function Intro({ lightMode }) {
  return (
    <section className="about section-padding main-bg">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="about-circle-crev md-hide">
              <div className="circle-button">
                <div className="rotate-circle fz-16 ls1 text-u">
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path></defs>
                    <text>
                      <textPath xlinkHref="#textcircle" textLength="900"> A g e n c i a     B o u t i q u e - A g e n c i a     B o u t i q u e - </textPath>
                    </text>
                  </svg>
                </div>
              </div>
              <div className="half-circle-img">
                <img src="/dark/assets/imgs/landing/ofi.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont sec-lg-head">
              <h6 className="dot-titl mb-20">Nuestra Agencia</h6>
              <h2 className="d-slideup wow">
                <span className="sideup-text"><span className="">Digitalización Estratégica </span></span>
                <span className="sideup-text"><span className="">para Impulsar tu Empresa o Negocio</span></span>
              </h2>
              <div className="row">
                <div className="col-lg-12">
                  <div className="text mt-20">
                    <p>Elevamos tu marca a nuevos niveles de impacto a través de un diseño visionario y soluciones personalizadas. Trabajamos con pasión para dejar una huella permanente en el mundo digital</p>
                  </div>
                  
                  <div className="underline">
                    {/* <Link href="/about" className="mt-30 ls1 sub-title">Sobre Nosotros <i className="ml-5">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                      </svg></i>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg mt-100 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item-serv md-mb50">
              <div className="d-flex align-items-center pb-20 mb-30 bord-thin-bottom">
                <div className="mr-30">
                  <div className="icon-img-50">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/0.png`} alt="" />
                  </div>
                </div>
                <div>
                  <h6>Desarrollo de Software a Medida</h6>
                </div>
              </div>
              <p className="fz-14">Damos vida a tus ideas con Desarrollo de Software a Medida, diseñando y construyendo soluciones 
              digitales desde la concepción hasta la implementación final. </p>
                <Link href="/services" className="arrow mt-40">
                  <span className="circle">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="fz-12 text-u ml-10">Ver Más</span>
                </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item-serv md-mb50">
              <div className="d-flex align-items-center pb-20 mb-30 bord-thin-bottom">
                <div className="mr-30">
                  <div className="icon-img-50">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/1.png`} alt="" />
                  </div>
                </div>
                <div>
                  <h6>Diseño UI/UX y Branding</h6>
                </div>
              </div>
              <p className="fz-14">Transformamos tu visión en experiencias impactantes a través de Diseño de Interfaz de Usuario (UI) y Experiencia de Usuario (UX).</p>
                <Link href="/services" className="arrow mt-40">
                  <span className="circle">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="fz-12 text-u ml-10">Ver Más</span>
                </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item-serv">
              <div className="d-flex align-items-center pb-20 mb-30 bord-thin-bottom">
                <div className="mr-30">
                  <div className="icon-img-50">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/2.png`} alt="" />
                  </div>
                </div>
                <div>
                  <h6>Consultoría y Optimización de Software:</h6>
                </div>
              </div>
              <p className="fz-14">new ways to showcase user content on digital support and envisioning the
                future arts.</p>
                <Link href="/services" className="arrow mt-40">
                  <span className="circle">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="fz-12 text-u ml-10">Ver Más</span>
                </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Intro