import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { PaymentsPlans } from "../components/payments-plans";
import { ContactForm } from "../components/contact-form";
import { Trans } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image-es5";
import { SavingsCalculator } from "../components/savings-calculator";
import { theme } from "../../tailwind.config";
import { faChartBar, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows, faSearch } from "@fortawesome/free-solid-svg-icons";
import arrowLoopSvg from "./../images/arrow-loop.svg";

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
        className="w-full bg-fixed bg-cover"
        fluid={data.bgStripes.childImageSharp.fluid}
        backgroundColor={theme.colors.primary}
      >
        <section className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-3 content-center min-h-screen py-10">
          <div className="grid content-center px-8 lg:px-0">
            <div className="md:mt-24 lg:mt-0">
              <h1 className="text-4xl lg:text-5xl font-medium text-white leading-tight pb-4">
                <Trans>
                  Implement a hybrid remote work strategy in your company.
                </Trans>
              </h1>
              <p className="text-xl py-4">
                <Trans>
                  Save thousands of euros by replacing square meters for
                  technology adopting a hybrid strategy of remote and office
                  work.
                </Trans>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 mt-6 md:mt-0">
                <a className="btn mt-6" href="#contact">
                  <Trans>Free sign up</Trans>
                </a>
                <a
                  className="btn mt-6 bg-transparent text-white border-white border"
                  href="#contact"
                >
                  <Trans>Request demo</Trans>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <figure className="w-auto mt-24 lg:mt-0">
              <Img
                className="w-full h-full lg:transform scale-150 translate-x-60"
                fluid={data.mockup1.childImageSharp.fluid}
                alt="DeWocracy admin dashboard & mobile app"
              />
            </figure>
          </div>
        </section>
      </BackgroundImage>

      <div className="w-full  py-16 lg:py-32">
        <section className="container mx-auto">
          <h2 className="font-medium text-2xl pb-8 text-center">
            <Trans>How much could your company save with DeWocracy?</Trans>
          </h2>
          <SavingsCalculator />
        </section>
        <section className="container mx-auto">
          <div className="relative table">
            <figure className="absolute top-56 -left-72">
              <img
                id="arrow-loop-svg"
                src={arrowLoopSvg}
                alt=""
                width="550px"
              />
            </figure>
            <h2 className="font-medium text-2xl pt-36 pb-10 text-center">
              <Trans>
                We help you in the transition towards a more flexible work model
                and with less dependence on physical space.
              </Trans>
            </h2>
            <div className="grid gap-10 lg:grid-cols-12 lg:w-9/12 float-right">
              <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center col-span-12 lg:col-span-10">
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <FontAwesomeIcon
                      icon={faChartBar}
                      className="text-primary mr-4"
                      size="3x"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg pb-4">
                    Understand your needs
                  </h3>
                  <p>
                    We give you the tools to understand the occupation of your
                    office, the preferences of your employees and the costs
                    associated with your current office model.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center lg:col-start-2 col-span-12 lg:col-span-10">
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-primary mr-4"
                      size="3x"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg pb-4">Find your space</h3>
                  <p>
                    Based on our analysis, we propose your ideal office space
                    and the model that best suits your needs (traditional
                    office, coworking, remote work).
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg flex justify-between items-center col-span-12 lg:col-span-10">
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <FontAwesomeIcon
                      icon={faPeopleArrows}
                      className="text-primary mr-4"
                      size="3x"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg pb-4">
                    Manage remote work
                  </h3>
                  <p>
                    Implement your strategy using our booking, monitoring and
                    cost analysis system. Manage the administrative part of
                    remote work efficiently and evaluate the results to
                    fine-tune your strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto grid lg:grid-cols-2 pt-16 lg:pt-32">
          <div>
            <figure className="w-auto mt-24 lg:mt-0">
              <Img
                className="w-full h-full"
                fluid={data.mockup3.childImageSharp.fluid}
                alt="DeWocracy admin dashboard"
              />
            </figure>
          </div>
          <div className="grid justify-center content-start">
            <h2 className="font-medium text-2xl py-10 pb-5 text-center">
              <Trans>Web app for the company</Trans>
            </h2>
            <div>
              <ul className="grid gap-6">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Reservation of office space and remote work.</Trans>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Digitized time control and vacation request.</Trans>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Management of personalized workspaces.</Trans>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>
                    Historical telework statistics and hours worked.
                  </Trans>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="container mx-auto grid flex-col-reverse lg:grid-cols-2 pt-16 lg:pt-16">
          <div className="grid justify-center content-center">
            <h2 className="font-medium text-2xl py-10 pb-5 text-center">
              <Trans>Mobile app for the employee</Trans>
            </h2>
            <div>
              <ul className="grid gap-6">
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>
                    Real-time monitoring of the remote work in the company.
                  </Trans>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Analysis of the occupation space of the office.</Trans>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>
                    Time control and administration of absences and vacations.
                  </Trans>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>
                    Quantification of the cost associated with unused space.
                  </Trans>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-start-1 lg:col-start-auto row-start-1 lg:row-start-auto">
            <figure className="w-auto mt-24 lg:mt-0">
              <Img
                className="w-full h-full"
                fluid={data.mockup2.childImageSharp.fluid}
                alt="DeWocracy mobile app screenshots"
              />
            </figure>
          </div>
        </section>
      </div>

      <BackgroundImage
        id="pricing"
        Tag="div"
        className="w-full bg-fixed bg-cover py-10"
        fluid={data.bgStripes.childImageSharp.fluid}
        backgroundColor={theme.colors.primary}
      >
        <section className="container mx-auto text-white lg:px-32">
          <h2 className="font-medium text-white text-2xl pb-8">
            <Trans>Selecciona el plan que necesitas para tu empresa.</Trans>
          </h2>
          <PaymentsPlans />
        </section>

        <section
          id="contact"
          className="container mx-auto text-white xl:w-2/3 self-center"
        >
          <h2 className="font-bold text-white text-2xl lg:text-4xl py-16 text-center">
            <Trans>Want to talk with us?</Trans>
          </h2>
          <p className="pb-5">
            Puedes{" "}
            <a
              href="https://calendly.com/dewocracylabs/dewocracy-demo"
              className="underline"
            >
              agendar una videollamada
            </a>{" "}
            a la hora que mejor te vaya, contactarnos a info@dewocracy.com o
            escribirnos en el formulario de contacto.
          </p>
          <ContactForm />
        </section>
      </BackgroundImage>
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
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mockup2: file(relativePath: { eq: "dewocracy-app-mockup-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    mockup3: file(relativePath: { eq: "dewocracy-app-mockup-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
