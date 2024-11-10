import { Palette, Phone, Mail } from "lucide-react";

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Lo Que Hacemos
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16">
          <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="rounded-full bg-purple-500 p-4">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Tintes de Alta Calidad</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Producimos tintes vibrantes y duraderos para todo tipo de telas.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="rounded-full bg-pink-500 p-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Asesoramiento Experto</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Ofrecemos guías y consejos para obtener los mejores resultados.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="rounded-full bg-red-500 p-4">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Soporte al Cliente</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Estamos aquí para ayudarte en cada paso del proceso de teñido.
            </p>
          </div>
          {/* <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105"> */}
          {/*   <div className="rounded-full bg-blue-500 p-4"> */}
          {/*     <Brain className="h-6 w-6 text-white" /> */}
          {/*   </div> */}
          {/*   <h3 className="text-xl font-bold">Innovación en Procesos</h3> */}
          {/*   <p className="text-gray-500 dark:text-gray-400"> */}
          {/*     Desarrollamos soluciones químicas innovadoras adaptadas a las */}
          {/*     necesidades específicas de cada cliente. */}
          {/*   </p> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
