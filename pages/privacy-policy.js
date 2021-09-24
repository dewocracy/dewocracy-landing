import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from 'next/link'

function PrivacyPolicy() {
  return (
    <Layout>
      <SEO title="Política de Privacidad" />
      <div className="w-full bg-fixed min-h-screen  py-16">
        <section className="rounded bg-white container mx-auto px-8 py-12 legal">
          <h1 className="text-5xl font-bold mb-12">Política de Privacidad</h1>
          <h2 className="text-2xl  font-bold my-4">1. Introducción</h2>
          <p>
            DeWocracy titular del sitio web en{" "}
            <Link href="/">www.dewocracy.com</Link> (en adelante, el “Sitio Web”)
            y de la plataforma DeWocracy (“Plataforma”) y aplicación para
            empleados (“App”) está especialmente sensibilizado con la protección
            de los datos de los Usuarios de los servicios y Visitantes que
            acceden al Sitio Web.
          </p>
          <p>
            Mediante la presente Política de Privacidad informa a los usuarios
            que se hayan registrado en el Sitio Web (“Usuarios”) y otras
            personas que visiten el Sitio Web y/o se comuniquen con DeWocracy
            (“Visitantes”) cuyos los datos personales pueden ser recabados y
            tratados por DeWocracy, con el fin de que decidan, libre y
            voluntariamente, si desean facilitar la información solicitada. Así
            pues, en cumplimiento del Reglamento (UE) 2016/679, mediante el
            presente documento, DeWocracy informa del tratamiento que podrá
            realizar de los Usuarios en calidad de Responsable del Tratamiento
            así como de Encargado del Tratamiento (ver Anexo 1) y cuando
            corresponda de los Visitantes del Sitio Web.
          </p>
          <h2 className="text-2xl  font-bold my-4">2. Responsable de Tratamiento</h2>
          <p>
            El Responsable de Tratamiento es DEWOCRACY LABS, S.L., con domicilio
            social en C/ Balmes 403-407 Escalera A 5º 2ª, 08022, Barcelona,
            España y CIF nº. B02920247. E-mail de contacto:
          </p>
          <h2 className="text-2xl  font-bold my-4">3. Selección de Plan y registro</h2>
          <table>
            <thead>
              <tr>
                <th>Datos recogidos</th>
                <th>Finalidad</th>
                <th>Base legal</th>
                <th>Plazo de conservación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="font-bold">Identificativos</span>: nombre,
                  apellidos y correo electrónico, nombre empresa.
                </td>
                <td>
                  Prestar por parte de DeWocracy los Servicios contratados.
                </td>
                <td>Ejecución del contrato</td>
                <td>
                  Durante el plazo de 5 años tras la formalización de la
                  relación contractual para atender a cualquier responsabilidad
                  legal que pudiera derivarse de la misma.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="font-bold">Identificativos</span>: nombre y
                  correo electrónico.
                </td>
                <td>
                  Gestionar las consultas, solicitud o petición que los Usuarios
                  puedan realizar sobre DeWocracy.
                </td>
                <td>Interés legítimo.</td>
                <td>
                  Los datos de carácter personal tratados para esta finalidad
                  serán conservados el tiempo que sea necesario para atender la
                  consulta, solicitud o petición realizada por el Usuario.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="font-bold">Identificativos</span>: nombre y
                  correo electrónico.
                </td>
                <td>
                  Cuando lo solicite, enviar comunicaciones comerciales e
                  información relativas a los servicios de DeWocracy.
                </td>
                <td>Consentimiento (*).</td>
                <td>
                  Los datos recogidos serán conservados hasta que el Usuario
                  decida retirar el consentimiento.
                </td>
              </tr>
              <tr>
                <td>
                  <span className="font-bold">Navegación</span>: la IP y otras
                  características de la navegación de los Visitantes y Usuarios
                  (ej. ubicación y/o dispositivo) derivadas del uso de las
                  cookies que realiza el Sitio Web. Podrás encontrar más
                  información en nuestra{" "}
                  <Link href="/cookies-policy">Política de Cookies</Link> sobre el
                  uso de las cookies y tecnologías similares de seguimiento que
                  realiza el Sitio Web.
                </td>
                <td>
                  Realizar análisis de comportamiento de navegación y
                  estadísticos: La información recopilada a través de las
                  cookies y otras tecnologías de seguimiento similares que
                  permiten realizar un análisis de la navegación que hacen los
                  Usuarios y Visitantes, así como para detectar errores del
                  Sitio Web, o necesidad de hacer cambios el diseño, funciones y
                  servicios.
                </td>
                <td>
                  Consentimiento prestado a través del banner de cookies al
                  iniciar la navegación. Puedes retirar tu consentimiento
                  siguiendo los pasos indicados en la{" "}
                  <Link href="/cookies-policy">Política de Cookies</Link>.
                  Asimismo, la información recogida podremos utilizarla, en base
                  a nuestro interés legítimo para analizar y evaluar el uso
                  realizado del Sitio Web.
                </td>
                <td>
                  Los plazos de conservación de la información indicada la cual
                  es recopilada, dependen de cada cookie específica. Para más
                  información sobre los plazos de conservación de la información
                  para cada tipología de cookie, en nuestra{" "}
                  <Link href="/cookies-policy">Política de Cookies</Link>.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            (*) El Usuario debe tener en cuenta que incluso si opta por no
            recibir comunicaciones promocionales, DeWocracy puede continuar
            enviándole correos electrónicos no promocionales y otros tipos de
            comunicaciones, según lo que permita la ley, como los correos
            electrónicos de servicio relacionados con nuestra relación comercial
            en curso. Los correos electrónicos de Servicio contienen información
            relacionada con el servicio que el Usuario, como confirmaciones de
            contratación de Planes, cambios de Planes, etc. Podrá darse de baja
            en cualquier momento.
          </p>
          <h2 className="text-2xl  font-bold my-4">4. Comunicación de datos</h2>
          <p>
            De manera general y sin perjuicio de lo específicamente contemplado
            en la presente esta Política de Privacidad, DeWocracy no revelará
            sus datos a terceros, no obstante, DeWocracy informa que para
            cumplir con las finalidades descritas con anterioridad es necesario
            dar acceso los datos personales facilitados por el Usuario, o en su
            caso Visitante, a terceros proveedores de servicios como:
          </p>
          <ul>
            <li>
              <span className="font-bold">Netlify Inc.</span>como proveedor de
              servicios de hosting el cual en la ejecución de sus servicios
              puede realizar transferencias internacionales fuera del EEE al
              contar con las garantías adecuadas según las exigencias legales en
              materia de protección de datos. Para más información visita su
              Política de Privacidad en:{" "}
              <a href="https://www.netlify.com/privacy">
                https://www.netlify.com/privacy
              </a>
              .
            </li>
            <li>
              <span className="font-bold">Amplitude Inc.</span>como proveedor de
              herramienta de análisis del comportamiento de los Usuarios y
              Visitantes que hayan aceptado la instalación de cookies de
              Amplitude al acceder al Sitio Web y el cual en la ejecución de sus
              servicios puede realizar transferencias internacionales fuera del
              EEE al contar con las garantías adecuadas según las exigencias
              legales en materia de protección de datos. Para más información
              visita su Política de Privacidad en:{" "}
              <a href="https://amplitude.com/amplitude-security-and-privacy/data-protection-and-storage .">
                https://amplitude.com/amplitude-security-and-privacy/data-protection-and-storage
                .
              </a>
            </li>
            <li>
              <span className="font-bold">Mailchimp Inc.</span>como proveedor de
              servicios de marketing por correo electrónico, a efectos de que
              DeWocracy pueda realizar el envío de newsletters a los Usuarios
              que lo consientan y el cual en la ejecución de sus servicios puede
              realizar transferencias internacionales fuera del EEE al contar
              con las garantías adecuadas según las exigencias legales en
              materia de protección de datos. Para más información visita su
              Política de Privacidad en:{" "}
              <a href="https://mailchimp.com/es/help/about-the-general-data-protection-regulation/">
                https://mailchimp.com/es/help/about-the-general-data-protection-regulation/
              </a>
            </li>
            <li>
              <span className="font-bold">Salesforce Inc (Heroku)</span>como
              proveedor de servicios de desarrollo en la nube, el cual en la
              ejecución de sus servicios puede realizar transferencias
              internacionales fuera del EEE al contar con las garantías
              adecuadas según las exigencias legales en materia de protección de
              datos. Para más información visita su Política de Privacidad en:{" "}
              <a href="https://www.salesforce.com/company/privacy/">
                https://www.salesforce.com/company/privacy/
              </a>
            </li>
          </ul>
          <p>
            DeWocracy podrá compartir los datos de contacto profesional de
            oportunidades de negocio con nuestros clientes y socios comerciales,
            así como poner los datos de carácter personal a disposición de
            cualquiera empresa interesada en comprar o que compre DeWocracy o
            una parte de su negocio y, en consecuencia, dar acceso a
            cualesquiera auditores nacionales o internacionales para llevar a
            cabo su “due diligence” siempre que dicho tratamiento sea
            indispensable para la consecución satisfactoria de la operación
            mercantil. Tal y como se indica en el artículo 21 LOPDGDD, si la
            operación no se completara, los datos deberán ser inmediatamente
            suprimidos por la entidad receptora.
          </p>
          <h2 className="text-2xl  font-bold my-4">5. Derechos de protección de datos</h2>
          <p>
            El Usuario podrá ejercer los derechos de acceso, rectificación,
            cancelación, oposición y si procede de, portabilidad y limitación,
            enviando un escrito acompañado de una fotocopia del DNI o documento
            acreditativo equivalente a C/ Balmes 403-407 Escalera A 5º 2ª,
            08022, Barcelona, España o enviándolo por correo electrónico a
            info@DeWocracy.com e indicando en el asunto «Protección de Datos».
            Estos derechos tienen carácter “personalísimo”, por lo que
            únicamente podrán ser ejercitados por el propio interesado, o su
            representante legal, previa acreditación de su identidad, o si
            procede, de la suficiencia de la representación.
          </p>
          <p>
            Asimismo, el Usuario tendrá derecho a presentar una reclamación ante
            la Agencia Española de Protección de Datos (
            <a href="https://www.aepd.com">www.aepd.com</a>) si considera que se
            vulneran los derechos anteriormente expuestos en la presente
            Política de Privacidad o si considera que el tratamiento de datos
            personales que le conciernen infringe la normativa aplicable.
          </p>
          <h1>
            ANEXO 1. TRATAMIENTO DE DATOS PERSONALES POR DEWOCRACY EN CALIDAD DE
            ENCARGADO DEL TRATAMIENTO
          </h1>
          <p>
            DeWocracy podrá acceder a ciertos datos personales bajo la
            responsabilidad de la Empresa que contrata los Servicios a efectos
            de que DeWocracy pueda prestar correctamente los mismos. La Empresa,
            en calidad de Responsable del Tratamiento designa a DeWocracy como
            Encargado del Tratamiento de dichos datos personales que se
            indicarán a continuación, para tratarlos en nombre y por cuenta de
            la Responsable del Tratamiento, con el fin de prestar el Servicio.
          </p>
          <h2 className="text-2xl  font-bold my-4">1. Definiciones</h2>
          <p>
            A los fines de este Anexo, los siguientes términos tendrán el
            significado aquí establecido:
          </p>
          <ul>
            <li>
              <span className="font-bold">Acuerdo</span>: acuerdo entre
              DeWocracy y la Empresa para la prestación de los servicios de
              DeWocracy, tal como se establece en DeWocracy.com.
            </li>
            <li>
              <span className="font-bold">Datos personales</span>: toda la
              información sobre un individuo identificado o identificable; una
              persona física identificable significará cualquier persona cuya
              identidad pueda determinarse, directa o indirectamente, en
              particular por medio de un identificador, como un nombre, un
              número de identificación, datos de ubicación, un identificador
              online o uno o más elementos de identidad física, fisiológica,
              genética, psicológica, económica, cultural o social.
            </li>
            <li>
              <span className="font-bold">Encargado del Tratamiento</span>: la
              persona física o jurídica, autoridad pública u otra organización
              que procesa datos personales en nombre del Responsable del
              Tratamiento.
            </li>
            <li>
              <span className="font-bold">Interesado</span>: es el individuo
              identificado o identificable.
            </li>
            <li>
              <span className="font-bold">Responsable del Tratamiento</span>: la
              persona física o jurídica, autoridad pública u otra organización
              que, sola o conjuntamente con otros, define los propósitos y los
              medios del tratamiento.
            </li>
            <li>
              <span className="font-bold">Tratamiento</span>: cualquier
              operación o conjunto de operaciones llevadas a cabo con Datos
              personales o conjuntos de datos personales, ya sea por procesos
              automatizados o no, tales como recopilación, registro,
              organización, estructuración, preservación, adaptación o
              modificación, extracción, consulta, uso, comunicación por
              transmisión. difusión o cualquier otra forma de acceso, cotejo o
              interconexión, limitación, supresión o destrucción.
            </li>
            <li>
              <span className="font-bold">Brecha de seguridad</span>: cualquier
              brecha de seguridad que resulte en la destrucción, pérdida o
              alteración accidental o ilegal de los datos personales
              transmitidos, preservados o procesados de otra manera, o
              comunicación o acceso no autorizado a dichos datos.
            </li>
          </ul>
          <h2 className="text-2xl  font-bold my-4">2. Objecto y duración</h2>
          <p>
            Este anexo regula el tratamiento de datos personales por parte de
            DeWocracy, como Encargado del Tratamiento, bajo la responsabilidad
            del Responsable del Tratamiento durante el período durante el cual
            las Partes cumplan con sus obligaciones aplicables en virtud de los
            Servicios. Los interesados y las categorías de datos se describen en
            el Apéndice 1 a continuación.
          </p>
          <h2 className="text-2xl  font-bold my-4">3. Cumplimiento de las leyes de protección de datos</h2>
          <p>
            Tanto DeWocracy como el Responsable deberán cumplir con todas las
            leyes aplicables relacionadas con la privacidad y la protección de
            datos, incluido (sin limitación) el Reglamento general de protección
            de datos de la UE (2016/679), la Directiva de privacidad y
            comunicaciones electrónicas de la UE (2002/58/CE) como implementado
            en cada jurisdicción, y cualquier legislación de modificación o
            reemplazo de vez en cuando (colectiva e individualmente, &quot;
            <span className="font-bold">Leyes de Protección de Datos</span>
            &quot;).
          </p>
          <h2 className="text-2xl  font-bold my-4">
            4. Derechos y responsabilidades del Responsable del Tratamiento
          </h2>
          <p>
            Según lo establecido en el RGPD, el Responsable del Tratamiento
            deberá:
          </p>
          <p>
            <p>
              a) Implemente medidas técnicas y organizativas apropiadas para
              garantizar y poder demostrar que el tratamiento se lleva a cabo de
              acuerdo con la legislación aplicable.
            </p>
            <p>b) Adoptar políticas de protección de datos.</p>
            <p>
              c) Asegúrese de que el Responsable de Privacidad o, en su
              ausencia, el Responsable de Seguridad esté involucrado de manera
              adecuada y oportuna en todos los asuntos relacionados con la
              protección de Datos Personales.
            </p>
            <p>
              d) Adherirse a un código de conducta que pueda ser aprobado por la
              Comisión u otra autoridad competente.
            </p>
            <p>
              e) Mantenga un registro de las actividades de tratamiento en el
              caso de tratamiento de Datos personales que puedan suponer un
              riesgo para los derechos y libertades del interesado y/o de manera
              no ocasional, o que implique el tratamiento de categorías
              especiales de datos y/o datos relacionados con condenas e
              infracciones.
            </p>
            <p>
              f) Poner a disposición de las partes interesadas los aspectos
              esenciales de este acuerdo, a solicitud del Encargado del
              Tratamiento.
            </p>
            <p>
              g) Responda a los derechos legales establecidos por la ley
              aplicable sobre la protección de datos personales y cumpla con las
              estipulaciones indicadas en la cláusula 5, incluso si estos se
              dirigieron originalmente al Encargado del Tratamiento.
            </p>
          </p>
          <h2 className="text-2xl  font-bold my-4">
            5. Derechos y responsabilidades del Encargado del Tratamiento.
          </h2>
          <p>
            Según lo establecido en el RGPD, DeWocracy como Encargado del
            Tratamiento deberá:
          </p>
          <p>
            a) Realizar el tratamiento de sus datos personales solo sobre la
            base de instrucciones documentadas del Responsable del Tratamiento,
            incluidas las transferencias de datos personales a un tercer país u
            organización internacional, a menos que la ley de la Unión o las
            leyes aplicables de los Estados miembros lo requieran de otra
            manera; en tal caso, el Encargado del Tratamiento informará al
            Responsable del Tratamiento de ese requisito legal antes del
            tratamiento, a menos que la ley o el interés público prohíban lo
            contrario.
          </p>
          <p>
            b) Asegúrese de que las personas autorizadas para procesar datos
            personales se hayan comprometido a respetar la confidencialidad o
            estén sujetas a una obligación de confidencialidad de naturaleza
            legal.
          </p>
          <p>
            c) Tome todas las medidas técnicas y organizativas adecuadas para
            garantizar un nivel de seguridad adecuado al riesgo de tratamiento.
          </p>
          <p>
            d) Respetar las condiciones para recurrir a otro Encargado del
            Tratamiento, según lo establecido en la legislación vigente sobre
            protección de datos personales.
          </p>
          <p>
            e) Asistir al Responsable del Tratamiento, teniendo en cuenta la
            naturaleza del tratamiento, a través de medidas técnicas y
            organizativas apropiadas, siempre que sea posible, para que pueda
            cumplir con su obligación de responder a las solicitudes para el
            ejercicio de los derechos de los interesados.
          </p>
          <p>
            f) Ayude al Responsable del Tratamiento a garantizar que cumpla con
            sus obligaciones, teniendo en cuenta la naturaleza del tratamiento y
            la información que está disponible para el Encargado del
            Tratamiento.
          </p>
          <p>
            g) A elección del Responsable del Tratamiento, destruya o devuelva
            todos los Datos personales una vez que se hayan completado los
            servicios de tratamiento y destruya las copias existentes, a menos
            que la ley de la Unión o del Estado miembro aplicable exija la
            conservación de los Datos personales.
          </p>
          <p>
            h) Poner a disposición del Responsable del Tratamiento toda la
            información necesaria para demostrar el cumplimiento de las
            obligaciones establecidas en este documento, así como para permitir
            y contribuir al desempeño de las auditorías, incluidas las
            inspecciones, por parte del controlador u otros auditores
            autorizados para el Responsable del Tratamiento.
          </p>
          <p>
            i) Procese los Datos personales puestos a disposición del Encargado
            del Tratamiento de una manera que garantice que el personal a cargo
            siga las instrucciones del Responsable del Tratamiento.
          </p>
          <p>
            j) Asegúrese de que el Responsable de Privacidad o, en su ausencia,
            el Responsable de Seguridad esté involucrado de manera adecuada y
            oportuna en todos los asuntos relacionados con la protección de
            Datos Personales.
          </p>
          <p>
            k) Adherirse a un Código de Conducta aprobado por la Comisión u otra
            autoridad competente.
          </p>
          <p>
            l) Mantenga un registro de las actividades de tratamiento en el caso
            de tratamiento de Datos personales que puedan suponer un riesgo para
            los derechos y libertades del interesado y/o de manera no ocasional,
            o que implique el tratamiento de categorías especiales de datos y/o
            datos relacionados con condenas e infracciones.
          </p>
          <p>
            m) Responda a los derechos legales establecidos por el RGPD y cumpla
            con las estipulaciones indicadas en la cláusula 6, incluso si estos
            se dirigieron originalmente al Responsable del Tratamiento.
          </p>
          <h2 className="text-2xl  font-bold my-4">10. Ejercicio de sus derechos por parte de los interesados</h2>
          <p>
            Si el interesado aborda una solicitud o ejerce alguno de los
            derechos establecidos en las leyes de protección de datos, el
            controlador y/o el procesador deben proporcionar la información
            solicitada y realizar las acciones requeridas, sin demora y, a más
            tardar, dentro de un mes a partir de recibir la solicitud, que puede
            extenderse por otros dos meses si es necesario, teniendo en cuenta
            la complejidad de la aplicación y el número de solicitudes.
          </p>
          <p>
            Del mismo modo, pero en el caso de que el Responsable del
            Tratamiento y/o el procesador no procedan con la solicitud del
            interesado, deberá informar a este último sin demora y, a más
            tardar, un mes después de la recepción de la solicitud,
            proporcionará al interesado los motivos por los que no ha actuado e
            informará al interesado de su derecho a presentar una queja ante una
            autoridad competente y a presentar una apelación judicial. La
            respuesta a la solicitud del sujeto de datos se realizará en el
            mismo formato que el utilizado por la persona interesada, a menos
            que él/ella solicite que se haga lo contrario.
          </p>
          <h2 className="text-2xl  font-bold my-4">7. Consentimiento del Interesado</h2>
          <p>
            Al proporcionar a DeWocracy datos personales, en la medida permitida
            por la ley, el Responsable deberá recabar los consentimientos
            necesarios para que DeWocracy pueda usarlos datos personales
            indicados para los fines anteriores.
          </p>
          <p>
            En particular, el Responsable del Tratamiento de los datos de los
            empleados de la Empresa (“Interesados”), declara y garantiza a
            DeWocracy que tiene el consentimiento expreso de los Interesados
            para provisión del Servicio y tratamiento de datos, y puede
            contratar a DeWocracy para proporcionar el Servicio.
          </p>

          <h2 className="text-2xl  font-bold my-4">8. Subcontratación</h2>
          <p>
            Como Encargado del Tratamiento, DeWocracy puede proporcionar acceso
            a un procesador de subcontratista a los datos personales si
            consideramos razonablemente que dicho acceso y tratamiento son
            necesarios para el desempeño de los servicios. En caso de dicho
            acceso y antes de que el acceso tenga lugar, DeWocracy se asegurará
            de que exista un acuerdo con el tercero que sea suficiente para
            exigir que trate los datos personales de acuerdo con las
            disposiciones aplicables de este Acuerdo y aplicables. Los
            subcontratistas aprobados se detallan a continuación en el Apéndice
            1.
          </p>
          <h2 className="text-2xl  font-bold my-4">9. Transferencias internacionales</h2>
          <p>
            Las transferencias internacionales de datos personales solo se
            pueden realizar si se cumplen los requisitos de las leyes de
            protección de datos. Si una parte realiza una transferencia
            internacional de datos sin el consentimiento de la otra parte, esta
            última estará exenta de cualquier responsabilidad que pueda surgir
            como resultado de dicha transferencia o en relación con dicha
            transferencia. DeWocracy puede transferir Datos personales fuera del
            EEE a sus subencargados indicados en el{" "}
            <span className="font-bold">Apéndice 1</span>, que han celebrado un
            contrato con DeWocracy con las garantías contractuales adecuadas.
          </p>
          <h2 className="text-2xl  font-bold my-4">10. Brechas de seguridad</h2>
          <p>
            En la medida en que exista una instrucción de una autoridad
            supervisora competente, ley nacional o reglamento, en caso de
            violación de la seguridad de los Datos personales, el Responsable
            del Tratamiento y/o el Encargado del Tratamiento notificarán a la
            autoridad supervisora competente dicho incumplimiento sin demora
            indebida y, si es posible, a más tardar 72 horas después de que haya
            sucedido. Si la violación se encuentra dentro de los sistemas de
            DeWocracy, debe notificarlo de inmediato al Responsable, como máximo
            dentro de las 48 horas.
          </p>

          <h2 className="text-2xl  font-bold my-4">11. Terminación, resolución y caducidad</h2>
          <p>
            En caso de terminación, resolución o vencimiento de la relación
            contractual para la prestación de los servicios que se establecen a
            continuación entre el Responsable del Tratamiento y el Encargado del
            Tratamiento, este último no conservará los Datos personales a menos
            que sea legalmente requerido. De lo contrario, tras la terminación,
            resolución o vencimiento, o cuando ya no sea legalmente necesario
            conservar los datos, el Encargado del Tratamiento destruirá o
            devolverá al Responsable del Tratamiento todos los Datos Personales
            y cualquier copia de los mismos, así como cualquier soporte u otro
            documento que contenga Información personal.
          </p>
          <h2 className="underline">
            Apéndice 1 – Detalle del tratamiento de los datos personales
          </h2>
          <p>
            De acuerdo con las disposiciones establecidas en este documento y en
            el RGPD, el Encargado del Tratamiento realizará el tratamiento del
            tipo y la categoría de Datos personales proporcionados por el
            Responsable del Tratamiento establecido a continuación:
          </p>
          <ul>
            {/* TODO: add employee details here */}
            <li>
              Empleados de la Empresa que contrata los Servicios de DeWocracy:
              nombre, apellido, dirección de correo electrónico
            </li>
          </ul>
          <p>
            Se pueden agregar más datos a la lista, previa notificación y
            aprobación del Responsable.
          </p>
          <p>
            <span className="font-bold">Tipos de tratamiento</span>:
            recopilación, registro, organización, almacenamiento, consulta, uso,
            borrado o destrucción, cifrado, seudonimización, agregación.
          </p>
          <p>
            <span className="font-bold">Subcontratistas aprobados</span>{" "}
            (Subcontratista/Servicio):
          </p>
          <ul>
            <li>
              <span className="font-bold">Amazon Web Services</span>: Servicio
              de hosting. Puede consultar el Contrato de Encargado del
              Tratamiento en:{" "}
              <a href="https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf">
                https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf
              </a>
            </li>
          </ul>
          <p>
            <span className="font-bold">Transferencias internacionales</span>{" "}
            (Destinatario / Servicio):
          </p>
          <ul>
            <li>
              <span className="font-bold">Netlify Inc.</span>como proveedor de
              servicios de hosting el cual en la ejecución de sus servicios
              puede realizar transferencias internacionales fuera del EEE al
              contar con las garantías adecuadas según las exigencias legales en
              materia de protección de datos. Para más información visita su
              Política de Privacidad en:{" "}
              <a href="https://www.netlify.com/privacy">
                https://www.netlify.com/privacy
              </a>
              .
            </li>
            <li>
              <span className="font-bold">Amplitude Inc.</span>como proveedor de
              herramienta de análisis del comportamiento de los Usuarios y
              Visitantes que hayan aceptado la instalación de cookies de
              Amplitude al acceder al Sitio Web y el cual en la ejecución de sus
              servicios puede realizar transferencias internacionales fuera del
              EEE al contar con las garantías adecuadas según las exigencias
              legales en materia de protección de datos. Para más información
              visita su Política de Privacidad en:{" "}
              <a href="https://amplitude.com/amplitude-security-and-privacy/data-protection-and-storage .">
                https://amplitude.com/amplitude-security-and-privacy/data-protection-and-storage
                .
              </a>
            </li>
            <li>
              <span className="font-bold">Mailchimp Inc.</span>como proveedor de
              servicios de marketing por correo electrónico, a efectos de que
              DeWocracy pueda realizar el envío de newsletters a los Usuarios
              que lo consientan y el cual en la ejecución de sus servicios puede
              realizar transferencias internacionales fuera del EEE al contar
              con las garantías adecuadas según las exigencias legales en
              materia de protección de datos. Para más información visita su
              Política de Privacidad en:{" "}
              <a href="https://mailchimp.com/es/help/about-the-general-data-protection-regulation/">
                https://mailchimp.com/es/help/about-the-general-data-protection-regulation/
              </a>
            </li>
            <li>
              <span className="font-bold">Salesforce Inc (Heroku)</span>como
              proveedor de servicios de desarrollo en la nube, el cual en la
              ejecución de sus servicios puede realizar transferencias
              internacionales fuera del EEE al contar con las garantías
              adecuadas según las exigencias legales en materia de protección de
              datos. Para más información visita su Política de Privacidad en:{" "}
              <a href="https://www.salesforce.com/company/privacy/">
                https://www.salesforce.com/company/privacy/
              </a>
            </li>
          </ul>
          <p>
            <span className="font-bold">Versión</span>: 22 de febrero de 2021
          </p>
        </section>
      </div>
    </Layout>
  );
}


export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

export default PrivacyPolicy;
