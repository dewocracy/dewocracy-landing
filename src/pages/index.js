import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { PaymentsPlans } from "../components/payments-plans";
import { ContactForm } from "../components/contact-form";
import { Trans } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image-es5";

function IndexPage() {
  const data = useStaticQuery(query);
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
      <BackgroundImage
        Tag="div"
        className="w-full bg-fixed bg-cover min-h-screen"
        fluid={data.bgStripes.childImageSharp.fluid}
        backgroundColor={`#334afd`}
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
              <Img
                className="w-full h-full"
                fluid={data.mockup1.childImageSharp.fluid}
                alt="DeWocracy admin dashboard & mobile app"
              />
            </figure>
          </div>
        </section>
      </BackgroundImage>

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
                <Img
                  className="w-12 h-12"
                  fixed={data.feat1.childImageSharp.fixed}
                  alt=""
                />
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
                <Img
                  className="w-12 h-12"
                  fixed={data.feat6.childImageSharp.fixed}
                  alt=""
                />
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
                <Img
                  className="w-12 h-12"
                  fixed={data.feat3.childImageSharp.fixed}
                  alt=""
                />
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
                <Img
                  className="w-12 h-12"
                  fixed={data.feat2.childImageSharp.fixed}
                  alt=""
                />
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
                <Img
                  className="w-12 h-12"
                  fixed={data.feat5.childImageSharp.fixed}
                  alt=""
                />
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
                <Img
                  className="w-12 h-12"
                  fixed={data.feat4.childImageSharp.fixed}
                  alt=""
                />
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
                <Img
                  className="w-full h-full"
                  fluid={data.mockup3.childImageSharp.fluid}
                  alt="DeWocracy admin dashboard & mobile app"
                />
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
              <Img
                className="w-full h-full"
                fluid={data.mockup2.childImageSharp.fluid}
                alt="DeWocracy admin dashboard & mobile app"
              />
            </figure>
          </div>
        </section>
      </div>

      <BackgroundImage
        Tag="div"
        className="w-full bg-fixed bg-cover min-h-screen py-32"
        fluid={data.bgStripes.childImageSharp.fluid}
        backgroundColor={`#334afd`}
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
      </BackgroundImage>

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

export const query = graphql`
  query {
    bgStripes: file(relativePath: { eq: "bg-purple-strokes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mockup1: file(relativePath: { eq: "dewocracy-app-mockup-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mockup2: file(relativePath: { eq: "dewocracy-app-mockup-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mockup3: file(relativePath: { eq: "dewocracy-app-mockup-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    feat1: file(relativePath: { eq: "dewocracy-feat-1.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    feat2: file(relativePath: { eq: "dewocracy-feat-2.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    feat3: file(relativePath: { eq: "dewocracy-feat-3.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    feat4: file(relativePath: { eq: "dewocracy-feat-4.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    feat5: file(relativePath: { eq: "dewocracy-feat-5.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    feat6: file(relativePath: { eq: "dewocracy-feat-6.png" }) {
      childImageSharp {
        fixed(width: 60) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
