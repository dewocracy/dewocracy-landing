import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import React, {Fragment, useCallback, useMemo, useState} from "react";

const getCurrencyText = (value) => Number(value).toLocaleString(undefined, {style: 'currency', currency: 'EUR'});

const plans = {
    biannual: {
        text: 'Semestral - hasta un 28% de ahorro',
        startup: getCurrencyText(3),
        business: getCurrencyText(5),
    },
    monthly: {
        text: 'Mensual',
        startup: getCurrencyText(4),
        business: getCurrencyText(7),
    }
}

export const PaymentsPlans = () => {
    const [plan, setPlan] = useState('biannual');
    const {startup, business} = useMemo(() => plans[plan], [plan]);
    const changePlan = useCallback(() => setPlan(plan === 'biannual' ? 'monthly' : 'biannual'))
    return <Fragment>
        <div className="grid justify-center">
        <div className="grid md:grid-cols-2 gap-x-24 mb-8">
            {Object.entries(plans).map(([key, {text}]) =>
                <Fragment key={key}>
                    {
                        key === plan
                        ? <p className="btn text-white bg-lightBlue text-center">{text}</p>
                        : <button className="btn text-grey bg-transparent" onClick={changePlan}>{text}</button>
                    }
                </Fragment>
            )}
        </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 justify-center">
            <div className="rounded-lg bg-white p-8 md:p-12 max-w-md">
                <p className="text-lightBlue text-2xl md:text-4xl font-bold">Free</p>
                <p className="text-lightBlue text-2xl md:text-4xl">
                    <span className="font-bold">{getCurrencyText(0)}</span>
                    <span className="text-xl"> / Month - User</span>
                </p>
                <ol className="text-black text-lg py-8">
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>1
                        Administrador
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>3
                        Usuarios
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>Plataforma
                        de Empresa
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>App
                        para los Trabajadores
                    </li>
                    <li className="my-3 text-grey"><FontAwesomeIcon icon={faCheck} className="mr-4"/>Reporte
                        Semanal
                    </li>
                    <li className="my-3 text-grey"><FontAwesomeIcon icon={faCheck} className="mr-4"/>Análisis
                        de Competencia
                    </li>
                </ol>
                <button className="btn bg-lightBlue text-white w-full">
                    Get free
                </button>
            </div>
            <div className="rounded-lg bg-white p-8 md:p-12 max-w-md">
                <p className="text-purple text-2xl md:text-4xl font-bold">Start up</p>
                <p className="text-purple text-2xl md:text-4xl">
                    <span className="font-bold">{startup}</span>
                    <span className="text-xl"> / Month - User</span>
                </p>
                <ol className="text-black text-lg py-8">
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>1
                        Administrador Ilimitados
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>
                        Usuarios
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>Plataforma
                        de Empresa
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>App
                        para los Trabajadores
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>Reporte
                        Semanal
                    </li>
                    <li className="my-3 text-grey"><FontAwesomeIcon icon={faCheck} className="mr-4"/>Análisis
                        de Competencia
                    </li>
                </ol>
                <button className="btn bg-purple text-white w-full">
                    Sign Up Now
                </button>
            </div>
            <div className="rounded-lg bg-white p-8 md:p-12 max-w-md">
                <p className="text-primary text-2xl md:text-4xl font-bold">Business</p>
                <p className="text-primary text-2xl md:text-4xl">
                    <span className="font-bold">{business}</span>
                    <span className="text-xl"> / Month - User</span>
                </p>
                <ol className="text-black text-lg py-8">
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="absolute text-lightBlue mr-4 leading-8"/>
                        <span className="ml-8 inline">Administradores Ilimitados</span>
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>
                        Usuarios Ilimitados
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>Plataforma
                        de Empresa
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>App
                        para los Trabajadores
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>Reporte
                        Semanal
                    </li>
                    <li className="my-3"><FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4"/>Análisis
                        de Competencia
                    </li>
                </ol>
                <button className="btn bg-primary text-white w-full">
                    Explore
                </button>
            </div>
        </div>
    </Fragment>;
}
