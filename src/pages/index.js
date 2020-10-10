import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import bgPurpleStrokes from "../images/bg-purple-strokes.png";
import mockup1 from "../images/dewocracy-app-mockup-1.png";
import mockup2 from "../images/dewocracy-app-mockup-2.png";
import mockup3 from "../images/dewocracy-app-mockup-3.png";
import feat1 from "../images/dewocracy-feat-1.png";
import feat2 from "../images/dewocracy-feat-2.png";
import feat3 from "../images/dewocracy-feat-3.png";
import feat4 from "../images/dewocracy-feat-4.png";
import feat5 from "../images/dewocracy-feat-5.png";
import feat6 from "../images/dewocracy-feat-6.png";
import {PaymentsPlans} from "../components/payments-plans";

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
                title="Home"
            />

            <div className="w-full bg-fixed h-screen" style={{backgroundImage: `url(${bgPurpleStrokes})`}}>
                <section
                    className="container mx-auto text-white grid grid-cols-1 md:grid-cols-2 min-h-screen content-center gap-32">
                    <div className="grid content-center">
                        <div>
                            <h1 className="text-6xl font-bold text-white leading-none l:text-justify pb-4">
                                Democratizando el trabajo desde cualquier lugar.
                            </h1>
                            <p className="font-bold text-xl">
                                Gestiona de manera fácil y centralizada la ocupación en tu oficina.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <a className="btn" href="#contact">Descargar iOS</a>
                                <a className="btn" href="#contact">Descargar Android</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <figure className="w-auto md:w-200">
                            <img src={mockup1} alt="DeWocracy admin dashboard & mobile app"/>
                        </figure>
                    </div>

                </section>
            </div>

            <div className="w-full bg-fixed min-h-screen bg-darkBlue py-32">
                <section className="container mx-auto text-white">
                    <div className="md:w-1/2">
                        <p className="py-8 text-teal font-bold leading-tight text-xl">Plataforma para la empresas</p>
                        <h2 className="font-bold text-white text-4xl pb-20">Gestiona de forma dinámica la ocupación en
                            tu oficina y desde dónde trabajan tus empleados.</h2>
                    </div>
                    <div className="grid content-center grid grid-cols-1 md:grid-cols-2 content-center gap-32">
                        <div
                            className="grid content-center grid grid-cols-1 sm:grid-cols-2 content-center gap-x-8 gap-y-24">
                            <div>
                                <figure className="w-48">
                                    <img src={feat1} alt="DeWocracy feature 1" width="60"/>
                                </figure>
                                <h3 className="text-xl font-bold py-2">Límites de ocupación</h3>
                                <p className="text-opacity-75">Añade límites de ocupación en la oficina consiguiendo una
                                    distancia de seguridad óptima para tus trabajadores.</p>
                            </div>
                            <div>
                                <figure className="w-48">
                                    <img src={feat6} alt="DeWocracy feature 1" width="60"/>
                                </figure>
                                <h3 className="text-xl font-bold py-2">Control horario</h3>
                                <p className="text-opacity-75">Control horario y fichaje de acuerdo con la legalidad y
                                    adaptado al teletrabajo. Visualiza las horas trabajadas de tus empleados y
                                    equipos.</p>
                            </div>
                            <div>
                                <figure className="w-48">
                                    <img src={feat3} alt="DeWocracy feature 1" width="60"/>
                                </figure>
                                <h3 className="text-xl font-bold py-2">Gestión de equipos</h3>
                                <p className="text-opacity-75">Organiza a tus empleados en equipos de trabajo. Gestiona
                                    la ocupación teniendo en cuenta aquellos empleados que intractúan entre sí con más
                                    frecuencia.</p>
                            </div>
                            <div>
                                <figure className="w-48">
                                    <img src={feat2} alt="DeWocracy feature" width="60"/>
                                </figure>
                                <h3 className="text-xl font-bold py-2">Control de costes</h3>
                                <p className="text-opacity-75">Entiende el impacto económico que supone tener equipos
                                    trabajando remotamente. Analiza costes y vías de ahorro.</p>
                            </div>
                            <div>
                                <figure className="w-48">
                                    <img src={feat5} alt="DeWocracy feature" width="60"/>
                                </figure>
                                <h3 className="text-xl font-bold py-2">Espacios de trabajo</h3>
                                <p className="text-opacity-75">Monitoriza en tiempo real desde dónde trabajan tus
                                    equipos. Obtiene los datos necesarios para el desarrollo una estrategia de trabajo
                                    en oficina y remoto.</p>
                            </div>
                            <div>
                                <figure className="w-48">
                                    <img src={feat4} alt="DeWocracy feature" width="60"/>
                                </figure>
                                <h3 className="text-xl font-bold py-2">Gestión de vacaciones</h3>
                                <p className="text-opacity-75">Administra la gestión de vacaciones, ausencias y bajas de
                                    forma centralizada. Digitaliza la experiencia y elimina procesos ineficientes.</p>
                            </div>
                        </div>
                        <div>
                            <figure className="w-auto md:w-200">
                                <img src={mockup3} alt="DeWocracy Admin Dashboard"/>
                            </figure>
                        </div>
                    </div>
                </section>
            </div>

            <div className="w-full bg-fixed min-h-screen py-32">
                <section
                    className="container mx-auto text-darkBlue grid grid-cols-1 md:grid-cols-2 min-h-screen content-center gap-32">
                    <div className="grid content-center">
                        <div>
                            <p className="pb-8 text-primary font-bold text-xl">Plataforma para empleados</p>
                            <h2 className="text-4xl font-bold leading-tight l:text-justify pb-8">
                                Interacción en tiempo real entre el empleado y la empresa para reservar su espacio de
                                oficina.
                            </h2>
                            <p className="text-greyBlue text-xl">
                                A través de nuestra aplicación móvil, el empleado puede indicar en su calendario desde
                                dónde trabajará y visualizar también la ubicación prevista de sus compañeros. Puede
                                visualizar por semana, mes y año los lugares desde dónde ha trabajado, así como indicar
                                las horas trabajadas mediante un sistema de control horario digitalizado cumpliendo con
                                la legalidad vigente.
                            </p>
                        </div>
                    </div>
                    <div>
                        <figure className="w-200 w-auto md:w-200">
                            <img src={mockup2} alt="DeWocracy admin dashboard & mobile app"/>
                        </figure>
                    </div>
                </section>
            </div>

            <div className="w-full bg-fixed min-h-screen py-32" style={{backgroundImage: `url(${bgPurpleStrokes})`}}>
                <section className="container mx-auto text-white">
                    <p className="py-8 font-bold leading-tight text-xl">Planes y precios</p>
                    <h2 className="font-bold text-white text-4xl pb-8">Selecciona el plan que necesitas para tu
                        empresa.</h2>
                    <PaymentsPlans/>
                </section>
            </div>

            <div className="w-full bg-fixed py-32 bg-darkBlue">
                <section className="container mx-auto text-white">
                    <p className="py-8 font-bold leading-tight text-xl" id="contact">Contacto</p>
                    <h2 className="font-bold text-white text-4xl pb-16">¿En qué te podemos ayudar?</h2>

                    <div className="grid justify-center">
                        <form action="">
                            <div className="grid md:grid-cols-2 gap-y-4">
                                <label htmlFor="name" className="font-bold">Nombre:</label>
                                <input type="text" name="name" required className="rounded-sm"/>
                                <label htmlFor="email" className="font-bold">Email:</label>
                                <input type="email" name="email" required className="rounded-sm"/>
                                <label htmlFor="message" className="font-bold">Mensaje:</label>
                                <textarea className="rounded-sm" required maxLength="500" name="message"/>
                            </div>
                            <input type="submit" className="btn text-greyBlue" value="Enviar"/>
                        </form>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default IndexPage;
