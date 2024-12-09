import { Palette, Phone, Mail, Brain } from "lucide-react";

export const Services = () => {
  return (
    <section className="w-full bg-gray-100 flex justify-center items-center md:px-8 xl:px-64 py-12">
      <div className="max-md:px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Lo Que Hacemos
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105 h-full">
            <div className="rounded-full bg-purple-500 p-4">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Colorantes de Alta Calidad</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Producimos colorantes vibrantes y duraderos para todo tipo de
              prendas.
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
          <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="rounded-full bg-yellow-500 p-4">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Innovación en Procesos</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Desarrollamos soluciones químicas innovadoras adaptadas a las
              necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
