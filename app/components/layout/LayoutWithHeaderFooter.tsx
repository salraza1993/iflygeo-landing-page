import Header from "../header/Header";


function LayoutWithHeaderFooter({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default LayoutWithHeaderFooter