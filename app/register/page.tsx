import "@/app/assets/css/pages/register.css";
import SquarePattern from "../components/shared/SquarePattern";
import RegisterForm from "./RegisterForm";
import Link from "next/link";
import Logo from "../components/header/Logo";
import Image from "next/image";

type ListDataTypes = {
  icon: string,
  heading: string,
  text: string
}
export default function SignupPage() {
  const contentList: ListDataTypes[] = [
    {
      'icon': '/images/register-icon-1.png',
      'heading': 'Premium Air & Stay Connections',
      'text': 'Get instant access to over 300 airlines and over 1 million properties globally.'
    },
    {
      'icon': '/images/register-icon-2.png',
      'heading': 'Developer-friendly platform',
      'text': 'Build stress-free with our thorough API docs & guides and robust testing environment.'
    },
    {
      'icon': '/images/register-icon-3.png',
      'heading': 'World-class customer support',
      'text': 'Receive help with all post-ticketing needs from our dedicated support team.'
    },
  ]
  return (
    <main className="register-page">
      <SquarePattern />
      <Link href={'./'} className="back-button"><i className="fa-solid fa-arrow-left"></i></Link>
      <div className="register-page-wrapper">
        <div className="start-block">
          <div className="page-content">
            <Logo />
            <h4 className="title gilroy_light">
              Launch Your <strong>Travel Sales Business Today</strong> with <strong className="text-accent">Seamless Tech</strong> and <strong className="text-accent">Global Content</strong>
            </h4>
            <div className="points">
              {
                contentList.map((item: ListDataTypes, index:number) => {
                  return <div className="point-list" key={index}>
                    <div className="icon">
                      <Image src={item.icon} alt={'icon'} fill />
                    </div>
                    <div className="content">
                      <p className="fw-bold gilroy_bold">{item.heading}</p>
                      <small>{item.text}</small>
                    </div>
                  </div>
                })  
              }
            </div>
          </div>
        </div>
        <div className="end-block">
          <div className="form-content-wrapper">
            <h3 className="heading gilroy_light text-uppercase">
              Let&#39;s <strong className="text-primary">work</strong> <strong className="text-accent">together</strong>
            </h3>
            <p>
              For commercial, support, or other inquiries, please complete the form below. We will get back to you as soon as possible.
            </p>
            <div className="form-container">
              <RegisterForm />
              <div className="note">
                <small>At <strong>iFlyGeo</strong>, your privacy matters to us. The information you share allows us to connect with you about relevant content, products, and services we offer. You can opt out of these communications at any time. To learn more, please review our privacy policy.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}