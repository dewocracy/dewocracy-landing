import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import bgPurpleStrokes from "../images/bg-purple-strokes.jpg";
import mockup1 from "../images/dewocracy-app-mockup-1.png";
import mockup2 from "../images/dewocracy-app-mockup-2.png";
import mockup3 from "../images/dewocracy-app-mockup-3.png";
import feat1 from "../images/dewocracy-feat-1.png";
import feat2 from "../images/dewocracy-feat-2.png";
import feat3 from "../images/dewocracy-feat-3.png";
import feat4 from "../images/dewocracy-feat-4.png";
import feat5 from "../images/dewocracy-feat-5.png";
import feat6 from "../images/dewocracy-feat-6.png";
import { PaymentsPlans } from "../components/payments-plans";
import { ContactForm } from "../components/contact-form";
import { Trans } from "gatsby-plugin-react-i18next";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="DeWocracy - Teletrabajo | Trabaja desde cualquier lugar"
        keywords={[
          "DeWocracy",
          "teletrabajo",
          "oficina",
          "opcupación",
          "trabajo en remoto",
        ]}
      />
      <div
        className="w-full bg-fixed bg-cover min-h-screen"
        style={{ backgroundImage: `url(${bgPurpleStrokes})` }}
      >
        <section className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-2 min-h-screen content-center gap-32">
          <div className="grid content-center px-8 lg:px-0">
            <div className="mt-24 lg:mt-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-none pb-4">
                <Trans>Democratizando el trabajo desde cualquier lugar.</Trans>
              </h1>
              <p className="font-bold text-xl">
                <Trans>
                  Gestiona de manera fácil y centralizada la ocupación en tu
                  oficina.
                </Trans>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <a className="btn mt-6" href="#contact">
                  <Trans>Descargar iOS</Trans>
                </a>
                <a className="btn mt-6" href="#contact">
                  <Trans>Descargar Android</Trans>
                </a>
              </div>
            </div>
          </div>
          <div>
            <figure className="w-auto lg:w-200 lg:pt-24">
              <Zoom>
                <img
                  src={mockup1}
                  alt="DeWocracy admin dashboard & mobile app"
                />
              </Zoom>
            </figure>
          </div>
        </section>
      </div>

      <div className="w-full bg-fixed min-h-screen bg-darkBlue py-16 lg:py-32">
        <section className="container mx-auto text-white px-8 lg:px-0">
          <div className="lg:w-1/2">
            <p className="py-8 text-teal font-bold leading-tight text-xl">
              <Trans>Plataforma para la empresa</Trans>
            </p>
            <h2 className="font-bold text-white text-2xl lg:text-4xl pb-20">
              <Trans>
                Gestiona de forma dinámica la ocupación en tu oficina y desde
                dónde trabajan tus empleados.
              </Trans>
            </h2>
          </div>
          <div className="grid content-center grid grid-cols-1 lg:grid-cols-2 content-center gap-32">
            <div className="grid content-center grid grid-cols-1 sm:grid-cols-2 content-center gap-x-8 gap-y-24">
              <div>
                <figure className="w-48">
                  <img src={feat1} alt="DeWocracy feature 1" width="60" />
                </figure>
                <h3 className="text-xl font-bold py-2">
                  <Trans>Límites de ocupación</Trans>
                </h3>
                <p className="text-opacity-75">
                  <Trans>
                    Añade límites de ocupación en la oficina consiguiendo una
                    distancia de seguridad óptima para tus trabajadores.
                  </Trans>
                </p>
              </div>
              <div>
                <figure className="w-48">
                  <img src={feat6} alt="DeWocracy feature 1" width="60" />
                </figure>
                <h3 className="text-xl font-bold py-2">
                  <Trans>Control horario</Trans>
                </h3>
                <p className="text-opacity-75">
                  <Trans>
                    Control horario y fichaje de acuerdo con la legalidad y
                    adaptado al teletrabajo. Visualiza las horas trabajadas de
                    tus empleados y equipos.
                  </Trans>
                </p>
              </div>
              <div>
                <figure className="w-48">
                  <img src={feat3} alt="DeWocracy feature 1" width="60" />
                </figure>
                <h3 className="text-xl font-bold py-2">
                  <Trans>Gestión de equipos</Trans>
                </h3>
                <p className="text-opacity-75">
                  <Trans>
                    Organiza a tus empleados en equipos de trabajo. Gestiona la
                    ocupación teniendo en cuenta aquellos empleados que
                    intractúan entre sí con más frecuencia.
                  </Trans>
                </p>
              </div>
              <div>
                <figure className="w-48">
                  <img src={feat2} alt="DeWocracy feature" width="60" />
                </figure>
                <h3 className="text-xl font-bold py-2">
                  <Trans>Control de costes</Trans>
                </h3>
                <p className="text-opacity-75">
                  <Trans>
                    Entiende el impacto económico que supone tener equipos
                    trabajando remotamente. Analiza costes y vías de ahorro.
                  </Trans>
                </p>
              </div>
              <div>
                <figure className="w-48">
                  <img src={feat5} alt="DeWocracy feature" width="60" />
                </figure>
                <h3 className="text-xl font-bold py-2">
                  <Trans>Espacios de trabajo</Trans>
                </h3>
                <p className="text-opacity-75">
                  <Trans>
                    Monitoriza en tiempo real desde dónde trabajan tus equipos.
                    Obtiene los datos necesarios para el desarrollo de una
                    estrategia híbrida de trabajo en oficina y remoto.
                  </Trans>
                </p>
              </div>
              <div>
                <figure className="w-48">
                  <img src={feat4} alt="DeWocracy feature" width="60" />
                </figure>
                <h3 className="text-xl font-bold py-2">
                  <Trans>Gestión de vacaciones</Trans>
                </h3>
                <p className="text-opacity-75">
                  <Trans>
                    Administra la gestión de vacaciones, ausencias y bajas de
                    forma centralizada. Digitaliza la experiencia y elimina
                    procesos ineficientes.
                  </Trans>
                </p>
              </div>
            </div>
            <div>
              <figure className="w-auto lg:w-200">
                <Zoom>
                  <img src={mockup3} alt="DeWocracy Admin Dashboard" />
                </Zoom>
              </figure>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full bg-fixed min-h-screen py-16 lg:py-32">
        <section className="container mx-auto text-darkBlue grid grid-cols-1 lg:grid-cols-2 min-h-screen content-center px-8 lg:px-0">
          <div className="grid content-center">
            <div>
              <p className="text-primary font-bold text-xl">
                <Trans>Aplicación para empleados</Trans>
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold leading-tight l:text-justify pb-8">
                <Trans>
                  Interacción en tiempo real entre el empleado y la empresa para
                  reservar su espacio de oficina.
                </Trans>
              </h2>
              <p className="text-greyBlue text-xl">
                <Trans>
                  A través de nuestra aplicación móvil, el empleado puede
                  indicar en su calendario desde dónde trabajará y visualizar
                  también la ubicación prevista de sus compañeros. Puede
                  visualizar por semana, mes y año los lugares desde dónde ha
                  trabajado, así como indicar las horas trabajadas mediante un
                  sistema de control horario digitalizado cumpliendo con la
                  legalidad vigente.
                </Trans>
              </p>
            </div>
          </div>
          <div>
            <figure className="w-200 w-auto lg:w-200">
              <Zoom>
                <img
                  src={mockup2}
                  alt="DeWocracy admin dashboard & mobile app"
                />
              </Zoom>
            </figure>
          </div>
        </section>
      </div>

      <div
        className="w-full bg-fixed bg-cover min-h-screen py-32"
        style={{ backgroundImage: `url(${bgPurpleStrokes})` }}
      >
        <section
          id="pricing"
          className="container mx-auto text-white px-8 lg:px-0"
        >
          <p className="py-8 font-bold leading-tight text-xl">
            <Trans>Planes y precios</Trans>
          </p>
          <h2 className="font-bold text-white text-2xl lg:text-4xl pb-8">
            <Trans>Selecciona el plan que necesitas para tu empresa.</Trans>
          </h2>
          <PaymentsPlans />
        </section>
      </div>

      <div className="w-full bg-fixed py-16 bg-darkBlue">
        <section className="container mx-auto text-white px-8 lg:px-0">
          <p className="py-8 font-bold leading-tight text-xl" id="contact">
            <Trans>Contacto</Trans>
          </p>
          <h2 className="font-bold text-white text-2xl lg:text-4xl pb-16">
            <Trans>¿En qué te podemos ayudar?</Trans>
          </h2>
          <ContactForm />
        </section>
      </div>
    </Layout>
  );
}

export default IndexPage;
