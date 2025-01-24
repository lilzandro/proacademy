import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { AcademicCapIcon, UsersIcon } from "@heroicons/react/24/solid"; // Cambiar el ícono
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://microsofters.com/wp-content/uploads/2022/05/Programando.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Domina React en solo 4 semanas.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Este curso intensivo está diseñado para que desarrolladores principiantes y entusiastas den el salto hacia la creación de aplicaciones web profesionales con la tecnología más demandada del mercado.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#000330] p-2 text-center shadow-lg">
                <AcademicCapIcon className="h-8 w-8 text-white " /> {/* Cambiar el ícono y color */}
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Aprende con Nosotros es un Placer
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Nuestro enfoque práctico y accesible garantiza que tu aprendizaje sea claro y efectivo. Aprovecha cada módulo sin confusión, y avanza al ritmo que te resulte más cómodo.
                <br />
                <br />
                El curso está diseñado con materiales fáciles de entender y herramientas interactivas que acelerarán tu progreso. Puedes comenzar a practicar de inmediato, solo asegúrate de seguir los módulos y aplicar los conceptos desde el principio.
              </Typography>
              <Button variant="filled">Leer mas</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="https://media.istockphoto.com/id/1385099270/es/vector/equipo-de-programadores-de-ti-que-trabajan-en-el-desarrollo-web-en-ordenadores-concepto-de.jpg?s=612x612&w=0&k=20&c=po_Oi03tSRwoIvCFPjyxjiVIoS9Qnnrli3PcUXkQ2p8="
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Crecimiento con Gran Potencial
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Nuestro curso ofrece una formación integral y de alta calidad que se adapta a tus necesidades. Desde conceptos básicos hasta técnicas avanzadas, nuestro objetivo es proporcionarte las mejores herramientas para tu desarrollo profesional.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Nuestro Equipo" heading="Conoce a los responsables">
            Nuestro equipo está formado por profesionales apasionados y comprometidos con tu éxito. Aunque somos una empresa nueva, cada uno de nosotros aporta experiencia y dedicación para brindarte el mejor contenido y soporte.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Construye algo grande con nosotros">
            Estamos en las primeras etapas de nuestra empresa, pero juntos podemos crear algo significativo. Únete a nosotros para aprender y crecer, mientras colaboramos en la creación de contenido educativo de calidad.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contacta con nosotros" heading="¿Quieres trabajar con nosotros?">
            Complete este formulario y nos comunicaremos con usted en 24 horas.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex flex-col gap-8 sm:flex-row">
              <Input variant="outlined" size="lg" label="Nombre completo" className="w-full" />
              <Input variant="outlined" size="lg" label="Dirección de correo electrónico" className="w-full" />
            </div>
            <Textarea variant="outlined" size="lg" label="Mensaje" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Acepto los
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Términos y Condiciones
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
