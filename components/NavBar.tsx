import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src='public/images/header-logo.svg'
          alt="Logo"
          width={130}
          height={29}
          />
        </Link>
      </nav>
    </header>
  )
}

export default NavBar