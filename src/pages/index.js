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
        <section className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-2 content-center min-h-screen py-10 lg:py-0">
          <div className="grid content-center px-0 md:px-8 lg:px-0">
            <div className="md:mt-24 lg:mt-0">
              <h1 className="text-4xl lg:text-5xl font-medium text-white leading-tight pb-4">
                <Trans>Implement flexible remote work in your company</Trans>
              </h1>
              <p className="text-xl py-4">
                <Trans>
                  Save thousands of euros optimizing your real estate footprint
                  by switching to a hybrid strategy of in-office and remote
                  work.
                </Trans>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 mt-6 md:mt-0">
                <a className="btn mt-6" href="#contact">
                  <Trans>Sign up for free</Trans>
                </a>
                <a
                  className="btn mt-6 bg-transparent text-white border-white border"
                  href="https://calendly.com/dewocracylabs/dewocracy-demo"
                >
                  <Trans>Request a demo</Trans>
                </a>
              </div>
            </div>
          </div>
          <div data-sal="slide-left" data-sal-delay="500">
            <figure className="w-auto mt-12 lg:mt-0">
              <Img
                className="w-full h-full transform lg:scale-150 lg:translate-x-36 xl:translate-x-52 lg:translate-y-10"
                fluid={data.mockup1.childImageSharp.fluid}
                alt="DeWocracy admin dashboard & mobile app"
              />
            </figure>
          </div>
        </section>
      </BackgroundImage>

      <div className="w-full  py-16 lg:py-32">
        <section className="container mx-auto">
          <h2 className="font-medium text-2xl pb-2 md:pb-8 text-center">
            <Trans>How much could your company save with DeWocracy?</Trans>
          </h2>
          <SavingsCalculator />
        </section>
        <section className="container mx-auto">
          <div className="relative md:table">
            <figure className="absolute top-96 lg:top-56 -left-72">
              <img
                id="arrow-loop-svg"
                src={arrowLoopSvg}
                alt=""
                width="550px"
              />
            </figure>
            <h2 className="font-medium text-2xl pt-12 md:pt-36 pb-10">
              <Trans>
                We help you transition to a more flexible workplace strategy
                that is less dependant on physical space. From idea to
                execution, we support you throughout all the stages of the
                process.
              </Trans>
            </h2>
            <div className="grid gap-y-4 lg:gap-10 lg:grid-cols-12 lg:w-9/12 float-right">
              <div
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="bg-white bg-opacity-70 z-10 p-6 shadow-lg rounded-lg flex justify-between items-center col-span-12 lg:col-span-10"
              >
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
                    <Trans>Understand your needs</Trans>
                  </h3>
                  <p>
                    <Trans>
                      We give you the tools to measure office occupancy,
                      understand employees{"'"} preferences, and analize costs
                      derived from your current workplace strategy.
                    </Trans>
                  </p>
                </div>
              </div>
              <div
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="bg-white bg-opacity-70 z-10 p-6 shadow-lg rounded-lg flex justify-between items-center lg:col-start-2 col-span-12 lg:col-span-10"
              >
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-primary mr-2 lg:mr-4"
                      size="3x"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg pb-4">
                    <Trans>Find your space</Trans>
                  </h3>
                  <p>
                    <Trans>
                      We use the data gathered to make an office space
                      optimization proposal and find out your ideal workplace
                      strategy (traditional office, flexible office, hybrid work
                      or remote work).
                    </Trans>
                  </p>
                </div>
              </div>
              <div
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="bg-white bg-opacity-70 z-10 p-6 shadow-lg rounded-lg flex justify-between items-center col-span-12 lg:col-span-10"
              >
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
                    <Trans>Manage remote work</Trans>
                  </h3>
                  <p>
                    <Trans>
                      Implement your strategy using our booking, monitoring and
                      cost analysis system. Manage the admin side of remote work
                      efficiently and assess your results to fine-tune your
                      strategy.
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto grid lg:grid-cols-2 pt-16 lg:pt-32">
          <div data-sal="slide-right" data-sal-easing="ease">
            <figure className="w-auto mt-12 lg:mt-0">
              <Img
                className="w-full h-full"
                fluid={data.mockup3.childImageSharp.fluid}
                alt="DeWocracy admin dashboard"
              />
            </figure>
          </div>
          <div
            data-sal="slide-left"
            data-sal-easing="ease"
            className="grid justify-center content-start"
          >
            <h2 className="font-medium text-2xl py-10 pb-5 text-center">
              <Trans>Web app for the company</Trans>
            </h2>
            <div>
              <ul className="grid gap-6">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>
                    Real-time monitoring of your company{"'"}s remote/in-office
                    work breakdown.
                  </Trans>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Office occupancy rate analysis.</Trans>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Unused space cost.</Trans>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>
                    Digital clock-in, absence and holidays management.
                  </Trans>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="container mx-auto grid flex-col-reverse lg:grid-cols-2 pt-16 lg:pt-16">
          <div
            data-sal="slide-right"
            className="grid justify-center content-center"
          >
            <h2 className="font-medium text-2xl py-10 pb-5 text-center">
              <Trans>Mobile app for the employee</Trans>
            </h2>
            <div>
              <ul className="grid gap-6">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Office and remote work booking.</Trans>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Management of custom work spaces.</Trans>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>
                    Digital clock-in, absences and holidays request.
                  </Trans>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  <Trans>Historical data of workplace habits.</Trans>
                </li>
              </ul>
            </div>
          </div>
          <div
            data-sal="slide-left"
            className="col-start-1 lg:col-start-auto row-start-1 lg:row-start-auto"
          >
            <figure className="w-auto mt-12 lg:mt-0">
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
            <Trans>Choose a plan for your company.</Trans>
          </h2>
          <PaymentsPlans />
        </section>

        <section
          id="contact"
          className="container mx-auto text-white self-center pt-16 lg:pt-32 "
        >
          <h2 className="font-bold text-white text-2xl lg:text-4xl text-center py-16">
            <Trans>Interested? Contact us!</Trans>
          </h2>
          <p className="pb-5">
            You can{" "}
            <a
              href="https://calendly.com/dewocracylabs/dewocracy-demo"
              className="underline"
            >
              request a video call
            </a>
            , contact us at info@dewocracy.com or send us a message via the
            contact form below.{'":"'}Puedes agendar una videollamada a la hora que
            más te convenga, contactarnos a info@dewocracy.com o escribirnos en
            el formulario de contacto.
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
