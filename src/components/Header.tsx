'use client'

import Link from 'next/link'
import { Colors } from './icons'

export default function Header () {
  return (
    <header className="px-2 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-14 items-center justify-between">
        <Link
          className="flex justify-center items-center space-x-1 md:space-x-2"
          href="/"
        >
          <Colors className="size-6" />
          <span className="font-bold">Romevic</span>
        </Link>
        {/* <nav className="[&_*]:w-min flex items-center space-x-2 md:space-x-6 text-sm font-medium text-nowrap"> */}
        {/*   <Link href="#about" aria-label="Ir a la sección Quiénes Somos"> */}
        {/*     Quiénes Somos */}
        {/*   </Link> */}
        {/*   <Link href="/contacto" aria-label="Ir a la página de contacto"> */}
        {/*     Contáctanos */}
        {/*   </Link> */}
        {/* </nav> */}
      </div>
    </header>
  )
}
