import Header from "../header/Header";
import MobileContactButtons from "../MobileContactButtons";


function LayoutWithHeaderFooter({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header />
      {children}
      <MobileContactButtons />
    </>
  )
}

export default LayoutWithHeaderFooter