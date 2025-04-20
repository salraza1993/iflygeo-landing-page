import Link from "next/link"
import Logo from "./Logo"
import Menu from "./Menu"
import '@/app/assets/css/elements/header.css'

function Header() {
  return (
    <header className="main-header">
      <div className="sub-header">
        <div className="block-start">
          <Logo />
          <Menu />
        </div>
        <div className="block-end">
          <Link href={'/register'} className="button button--accent" data-icon="start">
            <span className="icon"><i className="fa-solid fa-user-tie"></i></span>
            <span>Register Now</span>
          </Link>
          <button className="button button--whatsapp" data-icon="start">
            <span className="icon"><i className="fa-brands fa-whatsapp"></i></span>
            <span>Let's Talk</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header