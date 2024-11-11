import Image from 'next/image'

export default function About () {
  return (
    <section
      id="about"
      className="grid place-content-center w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6 space-y-24">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">Quienes Somos</h3>
            <p className="md:text-lg text-pretty text-gray-500 dark:text-gray-400">
              Somos una empresa con décadas de experiencia en importación y
              comercialización de insumos químicos para la industria textil.
              Ubicados en el corazón de San Juan de Lurigancho, nos esforzamos
              en brindar productos de alta calidad y un servicio post-venta
              dedicado, guiando a nuestros clientes en cada paso del proceso.
            </p>
          </div>
          <Image
            className="rounded border w-full sm:w-1/3"
            src="/whoarewe.jpg"
            width={500}
            height={250}
            alt="Quienes Somos"
          />
        </div>
        <div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">Nuestra Misión</h3>
            <p className="md:text-lg text-pretty text-gray-500 dark:text-gray-400">
              Nos dedicamos a empoderar a la industria textil con productos y
              asesorías que sumen valor y excelencia. Nos comprometemos a
              proporcionar soluciones efectivas que respaldan a nuestros
              clientes, desde pequeñas empresas hasta grandes industrias, para
              que cada proyecto logre resultados de calidad a precios
              competitivos.
            </p>
          </div>
          <Image
            className="rounded border w-full sm:w-1/3"
            src="/ourmission.jpg"
            width={500}
            height={250}
            alt="Quienes Somos"
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">La Visión</h3>
            <p className="md:text-lg text-pretty text-gray-500 dark:text-gray-400">
              Queremos ser tu primera opción en insumos textiles, reconocidos
              por nuestra innovación y compromiso con la calidad. Aspiramos a
              expandir nuestra presencia y colaborar con nuestros clientes en
              cada desafío, diferenciándonos por un servicio excepcional y un
              enfoque basado en la mejora continua.
            </p>
          </div>
          <Image
            className="rounded border w-full sm:w-1/3"
            src="/thevision.jpg"
            width={500}
            height={250}
            alt="Quienes Somos"
          />
        </div>
      </div>
    </section>
  )
}
