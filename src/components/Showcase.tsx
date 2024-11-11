import Image from 'next/image'

export default function Showcase () {
  return (
    <section className="flex justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
          Próximamente
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Camiseta teñida de varios colores vibrantes"
              className="object-cover w-full h-60 transition-transform group-hover:scale-105"
              height={300}
              src="/basics.jpg?height=300&width=400"
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover'
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Colorantes Básicos</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Jeans teñidos con un patrón de tie-dye colorido"
              className="object-cover w-full h-60 transition-transform group-hover:scale-105"
              height={300}
              src="/acids.jpg?height=300&width=400"
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover'
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white text-lg font-bold">Colorantes Ácidos</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Image
              alt="Variedad de accesorios teñidos incluyendo bufandas y bolsos"
              className="object-cover w-full h-60 transition-transform group-hover:scale-105"
              height={300}
              src="/directs.jpg?height=300&width=400"
              style={{
                aspectRatio: '400/300',
                objectFit: 'cover'
              }}
              width={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white text-lg font-bold">
                Colorantes Directos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
