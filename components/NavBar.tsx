import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/constants'

const NavBar = () => {
  return (
    <header className='padding-x py-8 z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link href="/">
          <Image src='/images/header-logo.svg'
          alt="Logo"
          width={130}
          height={29}
          />
        </Link>
        <ul className='flex-1 flex justify-end items-center max-lg:hidden gap-16'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <Image src='/icons/hamburger.svg' width={25} height={25} alt='Hamburger'/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar