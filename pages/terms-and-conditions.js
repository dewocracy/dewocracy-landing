import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from 'next/link'
import { Amplitude, LogOnMount } from '@amplitude/react-amplitude';
import { useRouter } from "next/router"

function TermsAndConditions() {
  const router = useRouter()

  return (
    <Amplitude
      eventProperties={(inheritedProps) => ({
        ...inheritedProps,
        page: {
          ...inheritedProps.page,
          name: 'termns and conditions page',
          language: router.locale,
          path: router.pathname
        },
      })}
    >
    <Layout>
        <LogOnMount eventType="page view" />

      <SEO title="Condiciones de uso" />
      <div className="flex justify-center">
        <div className="w-full bg-fixed min-h-screen max-w-4xl  py-16">
        <section className="rounded  bg-white container mx-auto px-8 py-12 legal">
            <h1 className="text-5xl font-bold mb-12">Condiciones de uso</h1>
            <h2 className="text-2xl  font-bold my-4">1. Introducción</h2>
            <p className="mt-2">
            El presente documento incluye las condiciones de uso (
            <span className="font-bold">“Condiciones de Uso”</span>) del sitio
            web <Link href="/">www.dewocracy.com</Link> (
            <span className="font-bold">“Sitio Web”</span>) y de la plataforma (
            <span className="font-bold">“Plataforma”</span>) titularidad de
            DeWocracy LABS, S.L.(<span className="font-bold">“DeWocracy”</span>{" "}
            o <span className="font-bold">“Nosotros”</span>).
          </p>
            <p className="mt-2">
            Las presentes Condiciones de Uso tienen por objeto regular tu
            acceso, navegación y contratación de los servicios que ofrece
            DeWocracy (<span className="font-bold">“Servicios”</span>) a través
            del Sitio Web y de la Plataforma. Al contratar los Servicios de
            DeWocracy, aceptas las presentes Condiciones de Uso, el{" "}
            <Link href="/legal-notice">Aviso Legal</Link>, la{" "}
            <Link href="/privacy-policy">Política de Privacidad</Link> y la{" "}
            <Link href="/legal-notice">Política de Cookies</Link> (
            <span className="font-bold">“Textos Legales”</span>). En caso de no
            ser así, deberás cesar el uso del Sitio Web y de la Plataforma
            inmediatamente.
          </p>
            <h2 className="text-2xl  font-bold my-4">2. Finalidad de la Plataforma</h2>
            <p className="mt-2">
            DeWocracy a través de la contratación de sus Servicios pone a tu
            disposición una herramienta para profesionales que ayuda a
            implementar a las empresas un teletrabajo flexible a través de la
            Plataforma en la que podrás realizar el monitoreo en tiempo real de
            la proporción de teletrabajo en tu empresa, un análisis del
            porcentaje de ocupación de tu oficina, así como consultar el coste
            del espacio sin usar y realizar un control horario y administrar
            ausencias y vacaciones y una app móvil (en adelante, la “App”) para
            tus empleados, en la que éstos podrán realizar la reserva espacio de
            oficina y de trabajo remoto, gestionar espacios de trabajo
            personalizados, así como la posibilidad de realizar el un control
            horario digitalizado, petición de vacaciones y acceder a datos
            históricos personales de teletrabajo.
          </p>
            <h2 className="text-2xl  font-bold my-4">3. Selección de Plan y registro</h2>
            <p className="mt-2">
            Con el fin de poder contratar nuestros Servicios, en primer lugar,
            deberás seleccionar uno de los planes ofrecidos (“Plan/es”) en
            DeWocracy, “Free”, “Startup” o “Business”.
          </p>
            <p className="mt-2">
            Una vez seleccionado el Plan que consideres oportuno para tu
            empresa, deberás completar el formulario que ponemos a tu
            disposición y facilitarnos tu correo electrónico, nombre y
            apellido/s, nombre de la empresa y sector, así como indicar los
            detalles del plan que deseas contratar, concretando el número de
            usuarios y el ciclo de facturación y añadiendo, si aplicara, el
            código de descuento facilitado. Una vez completados los campos
            anteriores, deberás introducir los correspondientes datos de pago
            solicitados por nuestro proveedor de servicios de pasarela de pago
            que indicamos en el apartado anterior y proceder al pago del precio
            del Plan seleccionado, según se indica a continuación en los
            apartados 3 y 4 de estas Condiciones de Uso. Una vez completado el
            registro, recibirás un email de confirmación por parte de DeWocracy
            con una contraseña genérica que te permitirá acceder por primera vez
            a tu cuenta y la cual deberás reestablecer inmediatamente para
            garantizar la seguridad de la cuenta. El tratamiento de los datos
            personales facilitados durante el registro se realizará conforme a
            nuestra <Link href="/privacy-policy">Política de Privacidad</Link>.
          </p>
            <h2 className="text-2xl  font-bold my-4">4. Precio y pago</h2>
            <p className="mt-2">
            El precio de cada uno de los Planes será el que indiquemos en el
            Sitio Web, así como en el momento de la compra, salvo en caso de
            error manifiesto. El precio los Planes se establece en euros se
            muestra en el Sitio Web sin el IVA incluido. Asimismo, el precio
            podrá estar sujeto a descuentos ofrecidos por DeWocracy, para lo
            cual será DeWocracy quien facilite el correspondiente código de
            descuento aplicable para cada promoción.
          </p>
            <p className="mt-2">
            El total del precio del Plan seleccionado ya sea mensual o
            semestral, se abonará por adelantado a DeWocracy a través de Stripe
            en el momento en el que te registres por primera vez en DeWocracy.
          </p>
            <p className="mt-2">
            Al realizar el abono del precio a través tarjeta de crédito o débito
            con Stripe, deberás aportar el correo electrónico, el número de
            tarjeta, la fecha de caducidad, y un Código de Validación que
            coincide con las tres últimas cifras del número impreso en cursiva
            en el reverso de su tarjeta, ofreciendo, de esta forma, más
            garantías acerca de la seguridad de la transacción, el nombre del
            titular de la tarjeta, así como el país y código postal.
          </p>
            <p className="mt-2">
            Los datos de tu tarjeta de crédito o débito que proporciones a la
            hora de realizar el pago serán directamente introducidos en nuestro
            proveedor de la pasarela de pago, Stripe y, por lo tanto, en ningún
            caso serán introducidos ni registrados en ningún servidor de
            DeWocracy, y serán tratados según las condiciones legales de Stripe
            disponibles en{" "}
            <a href="https://stripe.com/es/privacy ">
              https://stripe.com/es/privacy
            </a>
            .
          </p>

            <p className="mt-2">
            La transmisión de datos personales o bancarios necesarios para
            ejecutar el pago, se realizan utilizando un entorno seguro, un
            servidor basado en la tecnología de seguridad estándar SSL (
            <i>Secure Sockets Layer</i>). Toda la información que transmitas
            viajará cifrada a través de la red.
          </p>
            <p className="mt-2">
            Una vez realizado el pago de los Servicios, Stripe enviará a tu
            correo electrónico la correspondiente confirmación de pago. Podrás
            acceder en el apartado “Historial de pago” a los justificantes de
            pago existentes hasta el momento según la periodicidad de los
            Servicios contratados y podrás descargarlos en formato .pdf.
          </p>
            <h2 className="text-2xl  font-bold my-4">5. Uso de los Servicios</h2>
            <p className="mt-2">
            Al contratar y utilizar nuestros Servicios, te comprometes a hacerlo
            de conformidad con estas Condiciones de Uso, la legislación
            aplicable, en particular, la relativa a la intimidad, derechos de
            imagen, honor y reputación, secreto de las telecomunicaciones,
            protección de datos de carácter personal, relaciones laborales, no
            discriminación y revelación de secretos. Asimismo, aceptas que
            DeWocracy te otorga un derecho no exclusivo para acceder a los
            Servicios y por lo tanto tu cuenta tiene un carácter personal e
            intransferible. En concreto, aceptas asumes las siguientes
            obligaciones:
          </p>
          <ul>
            <li>
              Realizar el pago por adelantado del precio correspondiente al Plan
              contratado y en la periodicidad indicadas, tal y como se indica en
              las secciones 3 y 4.
            </li>
            <li>
              Hacer un buen uso de la Plataforma no provocando ningún daño en
              los sistemas físicos y lógicos de DeWocracy y también de los
              Servicios ofrecidos por DeWocracy, utilizándolos ofrecidos en la
              Plataforma sin contravenir la legislación vigente, la buena fe y
              el orden público ni dañar los derechos e intereses de terceros.
            </li>
            <li>
              Garantizar la veracidad y exactitud de los datos proporcionados al
              rellenar los formularios requeridos para proceder a la
              contratación de los Servicios, evitando así cualquier daño a
              DeWocracy como resultado de la incorrección de éstos.
            </li>
            <li>
              Ser mayor de edad, requisito indispensable para que puedas
              contratar los Servicios de DeWocracy.
            </li>
            <li>
              Hacer un buen uso de tu perfil de usuario y de tu contraseña de
              acceso a la Plataforma, comprometiéndote a hacer un uso diligente
              de los mismos, así como conservarlos adecuadamente para que no
              estén disponibles para terceros, comunicando con cualquier caso a
              DeWocracy su pérdida, robo o posible acceso por parte de un
              tercero no autorizado, para que DeWocracy pueda proceder al
              bloqueo inmediato.
            </li>
          </ul>
            <p className="mt-2">
            Asimismo, deberás abstenerte de usar los Servicios cuando no puedas
            garantizar el cumplimiento de cualquiera de las siguientes
            estipulaciones:
          </p>
            <p className="mt-4">
            a) Los Servicios deben usarse exclusivamente en entornos laborales
            y/o profesionales bajo tu exclusiva responsabilidad como empresario.
          </p>
            <p className="mt-4">
            b) Los Servicios podrán ser utilizados para finalidades del control
            horario de los empleados en cumplimiento de las normas jurídicas
            aplicables y sin vulnerar los derechos de los empleados u otras
            normas vinculantes.
          </p>
            <p className="mt-4">
            c) Los Servicios únicamente deberán ser utilizados una vez se hayan
            recabado el consentimiento de los empleados de acuerdo con lo
            establecido en la normativa aplicable.
          </p>
            <p className="mt-4">
            En cualquier caso, será tu responsabilidad exclusiva como
            empresario, asegurar el uso legítimo de los Servicios.
          </p>
            <h2 className="text-2xl  font-bold my-4">6. Renovación de las suscripciones a los Planes</h2>
            <p className="mt-2">
            Una vez transcurra el periodo del correspondiente Plan contratado,
            ya sea mensual o semestral, DeWocracy renovará automáticamente tu
            suscripción del Plan anteriormente contratado. No obstante lo
            anterior, podrás seguir utilizando nuestros Servicios desde que nos
            notifiques la voluntad de darte de baja del Plan contratado hasta
            que finalice el periodo contratado.
          </p>
            <h2 className="text-2xl  font-bold my-4">7. Cancelación de la cuenta</h2>
            <p className="mt-2">
            En caso de que quieras darte de baja deberás comunicarlo con un día
            de antelación para que podamos proceder a la cancelación del Plan
            contratado, sin perjuicio de que puedas seguir utilizando nuestros
            Servicios desde que nos notifiques la voluntad de darte de baja del
            Plan contratado hasta que finalice el periodo del mismo.
          </p>
            <p className="mt-2">
            En caso de que no podamos facturar el Plan contratado por devolución
            del recibo, te notificaremos del incumplimiento y perderás
            automáticamente la capacidad de acceder a la cuenta del Servicio.
            Los datos personales se eliminarán según lo establecido en nuestra
            Política de Privacidad.
          </p>
            <h2 className="text-2xl  font-bold my-4">8. Cambio de Plan</h2>
            <p className="mt-2">
            En el caso de que desees cambiar el Plan contratado ya sea porque
            (i) quieres contratar más usuarios y/o (ii) desees contar con
            administradores ilimitados, deberás hacer clic en “Plantilla” e
            indicar el número de usuarios adicionales y/o la opción de
            administradores ilimitado. Automáticamente aparecerá una ventaja
            emergente “Mejora tu Plan”, donde podrás aumentar el número de
            usuarios actual en tu Plan actual contratado y/o cambiar a un nuevo
            Plan (Startup o Business). Se procederá a facturar el precio del
            nuevo Plan seleccionado y/o de los usuarios adicionales añadidos al
            Plan actual, al mes siguiente de la notificación. Si los precios
            tienen períodos de facturación diferentes, el nuevo precio se
            facturará en el nuevo intervalo, a partir del día del cambio del
            Plan y/o adición de los usuarios correspondientes.
          </p>
            <h2 className="text-2xl  font-bold my-4">9. Exclusión de garantías</h2>
            <p className="mt-2">
            En DeWocracy prestamos los Servicios de manera profesional y
            diligente, de conformidad con la normativa aplicable. Salvo esta
            garantía expresa, en la máxima medida permitida por ley aplicable,
            no ofrecemos ninguna otra garantía, expresa o implícita, sobre los
            Servicios, y renuncias a cualquier garantía de idoneidad o de
            calidad satisfactoria de los Servicios.
          </p>
            <p className="mt-2">
            DeWocracy no asegura de la plena disponibilidad de los Servicios,
            por cuanto su acceso depende de circunstancias ajenas a su control y
            la propia Plataforma, como pueda ser la disponibilidad o el
            funcionamiento del dispositivo donde se instale o de las redes de
            comunicaciones.
          </p>
            <h2 className="text-2xl  font-bold my-4">10. Límite de responsabilidad</h2>
            <p className="mt-2">
            Excepto en la medida de lo permitido por la legislación aplicable
            DeWocracy no será por (A) cualquier pérdida indirecta, incluyendo, a
            título enunciativo y no limitativo, lucro cesante, pérdida de
            oportunidades de negocio, fondo de comercio o reputación,
            interrupción de la actividad comercial, fallos en los equipo
            informáticos u otros daños; (B) pérdidas derivadas de las siguientes
            acciones o relacionadas con las mismas: (i) usos ilícitos y/o
            contrarios a lo dispuesto en estas Condiciones de Uso, y en
            particular, en las restricciones de Uso contempladas en su Cláusula
            5 (ii) el uso o la incapacidad de usar los Servicios; (ii) el acceso
            ilícito o no autorizado a tus datos o de tus empleados en virtud de
            lo establecido en la Política de Privacidad; (iv) la eliminación o
            pérdida de datos a través de los Servicios o (v) cualesquiera
            cambios en los Servicios que te notifiquemos; (vi) comportamiento de
            cualquier tercero en la prestación de los Servicios; (v) causas de
            fuerza mayor. En cualquier caso, la responsabilidad de DeWocracy
            solamente será por daños directos y en ningún caso excederá de la
            cantidad total que hayas abonado en virtud de los Servicios en los
            doce (12) meses antes del evento que cause el daño.
          </p>
            <h2 className="text-2xl  font-bold my-4">11. Modificaciones del Servicio</h2>
            <p className="mt-2">
            DeWocracy se reserva el derecho a modificar el precio de los Planes
            mensuales o semestrales indicados en el Sitio Web con un preaviso de
            15 días. La notificación de dichos cambios en los correspondientes
            precios se publicará en el sitio web de DeWocracy y se te notificará
            por escrito a tu correo electrónico.
          </p>
            <h2 className="text-2xl  font-bold my-4">12. Soporte</h2>
            <p className="mt-2">
            Intentamos ofrecer los Servicios durante las 24 horas del día, los 7
            días de la semana. Sin embargo, debido a cuestiones de
            mantenimiento, seguridad o capacidad, así como a algunos
            acontecimientos ajenos a nuestro control (fuerza mayor), los
            Servicios podrán quedar temporalmente suspendidos o afectados.
            Cualquier error de servicio deberás notificárnoslo al servicio de
            soporte a través del canal de chat habilitado al efecto o a
            enviándonos un correo electrónico a support@DeWocracy.com, y nos
            comprometemos a responder en un plazo máximo de 3 días laborables.
          </p>
            <h2 className="text-2xl  font-bold my-4">13. Comunicaciones</h2>
            <p className="mt-2">
            Para la prestación de los Servicios, podremos comunicarnos contigo a
            través de notificaciones y chat de ayuda integrado en la Plataforma
            o email, con sujeción tu consentimiento previo cuando sea legalmente
            exigible. Estas comunicaciones pueden ser enviadas o iniciadas por
            DeWocracy o cualquiera de sus proveedores de servicios para
            validación de la cuenta de usuario, proporcionarte un recibo o
            factura, notificarte de ofertas, servicios de soporte o para
            cualquier otro servicio relacionado con los Servicios, la cuenta de
            usuario o con fines de marketing.
          </p>

            <p className="mt-2">
            Para dejar de recibir notificaciones, podrás gestionar tus
            consentimientos y preferencias enviando un correo electrónico a la
            dirección unsubscribe@DeWocracy.com con la solicitud “baja de
            comunicaciones”. Aceptas que DeWocracy envíe un mensaje para
            confirmar que la solicitud de baja de las comunicaciones ha sido
            recibida y atendida.
          </p>

            <h2 className="text-2xl  font-bold my-4">14. Ley aplicable y Jurisdicción</h2>
            <p className="mt-2">
            Las presentes Condiciones de Uso se regirán por la legislación
            española. Todos los litigios, discrepancias, controversias,
            cuestiones o reclamaciones resultantes de la interpretación,
            ejecución, incumplimiento, resolución o nulidad del presente
            contrato o relacionados con él, directa o indirectamente, se
            someterán, con renuncia expresa al fuero que pudiera
            corresponderles, a los Juzgados y Tribunales de Barcelona, España (y
            si en función de la materia u otras razones no los hubiera en
            Barcelona se someterán a aquellos Juzgados y Tribunales competentes
            más próximos a Barcelona y que incluyan a la ciudad en su
            jurisdicción).
          </p>

            <p className="mt-8 ">
              <span className="font-bold">Fecha de actualización</span>: 22 de
            febrero de 2021
          </p>
        </section>
      </div>
      </div>
    </Layout>
    </Amplitude>
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

export default TermsAndConditions;
