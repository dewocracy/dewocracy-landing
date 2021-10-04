import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from "next/link";
import { Amplitude, LogOnMount } from '@amplitude/react-amplitude';
import { useRouter } from "next/router"

function LegalNotice() {
  const router = useRouter()

  return (
    <Amplitude
      eventProperties={(inheritedProps) => ({
        ...inheritedProps,
        page: {
          ...inheritedProps.page,
          name: 'legal notice page',
          language: router.locale,
          path: router.pathname
        },
      })}
    >
      <Layout>
        <LogOnMount eventType="page view" />

        <SEO title="Aviso Legal" />
        <div className="flex justify-center">
          <div className="w-full bg-fixed min-h-screen  max-w-4xl  py-16">
            <section className="rounded  bg-white container mx-auto px-8 py-12 legal">
              <h1 className="text-5xl font-bold mb-12">Aviso Legal</h1>
              <h2 className="text-2xl  font-bold my-4">1. Sobre nosotros</h2>
              <p className="mt-4">
                DEWOCRACY LABS, S.L. (<span className="font-bold">“DeWocracy”</span>), es el titular de la plataforma DeWocracy (<span className="font-bold">“Plataforma”</span>) y del sitio web www.DeWocracy.com (<span className="font-bold">“Sitio Web”</span>) con CIF nº. B-02920247 y domicilio social en C/ Balmes 403-407 Escalera A 5º 2ª, 08022, Barcelona, España e inscrita en el registro mercantil de Barcelona, Tomo 47611 del Libro de Inscripciones Folio 198, Sección 1, Hoja 557089.
              </p>
              <p className="mt-4">Si quieres contactar con nosotros, puedes hacerlo a través del correo electrónico en info@dewocracy.com.</p>

              <h2 className="text-2xl  font-bold my-4">2. Propiedad intelectual e industrial
              </h2>
              <p className="mt-4">
                Los derechos de propiedad intelectual e industrial incorporados en el Sitio Web y Plataforma, el diseño gráfico y los códigos informáticos, así como los signos y marcas distintivos, el texto, imágenes, vídeos mostrados son propiedad de DeWocracy, o de sus licenciantes. Todos los derechos en relación con dicho contenido están reservados y se debe solicitar permiso expreso para su utilización y explotación a DeWocracy.
              </p>
              <p className="mt-4">Cualquier uso del contenido para el que DeWocracy no haya concedido la autorización expresa, sea directa o indirecta con ánimo de lucro o no, incluyendo la descarga, almacenamiento, transmisión, divulgación pública, distribución, reproducción o transformación, total o parcial, de dichos contenidos estará expresamente prohibida, por lo que DeWocracy podrá ejercer todas las acciones judiciales y extrajudiciales que considere pertinentes ante cualquier incumplimiento de sus derechos.
              </p>
              <h2 className="text-2xl  font-bold my-4">3. Enlaces “links” de terceros</h2>
              <p className="mt-4">DeWocracy no se hace responsable de las webs no propias o de terceros, a las cuales se puede acceder mediante enlaces/ “links” o de cualquier otro contenido puesto a disposición por terceros.
              </p>
              <p className="mt-4">Cualquier uso de un vínculo o acceso a una página web ajena a DeWocracy es realizado bajo tu voluntad y riesgo exclusivo, DeWocracy no recomienda ni garantiza ninguna información obtenida a través de un vínculo ajeno al Sitio Web y/o Plataforma ni se responsabiliza de ninguna pérdida, reclamación o perjuicio derivada del uso o mal uso de un vínculo, o de la información obtenida a través de él, incluyendo otros vínculos o webs, de la interrupción en el servicio o en el acceso, o del uso  o mal uso de un vínculo, tanto al conectar al portal web cómo al acceder a la información de otras webs desde el mismo portal web.
              </p>
              <h2 className="text-2xl  font-bold my-4">4. Privacidad</h2>
              <p className="mt-4">Te informamos de que todos los datos suministrados a DeWocracy tratarán con confidencialidad y responsabilidad por parte de DeWocracy de conformidad con la <Link href="/privacy-policy">Política de Privacidad</Link>.
              </p>
              <h2 className="text-2xl  font-bold my-4">5. Cookies
              </h2>
              <p className="mt-4">La información sobre el uso de las cookies en nuestro Sitio Web y Plataforma se encuentra disponible en la <Link href="/privacy-policy">Política de Cookies</Link>.
              </p>
              <h2 className="text-2xl  font-bold my-4">6. Modificaciones</h2>
              <p className="mt-4">Cuando se modifiquen los Textos Legales (es decir, <Link href="/legal-notice">Aviso Legal</Link>, <Link href="/terms-and-conditions">Términos y Condiciones</Link>, <Link href="/privacy-policy">Política de Privacidad</Link> y <Link href="/cookies-policy">Política de Cookies</Link>), DeWocracy te notificará para que los cambios sean aceptados, con lo cual será aplicable el nuevo texto.
              </p>
              <p className="mt-4">DeWocracy se reserva el derecho de enmendar los mencionados Textos Legales en la medida en que dichas modificaciones sean resultado de mejoras realizadas en los Servicios proporcionados por DeWocracy, cambios de naturaleza jurídica o cambios debidos a exigencias técnicas.
              </p>
              <p className="mt-4">
                <span className="font-bold">Versión</span>: 18 de febrero de 2021
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

export default LegalNotice;
