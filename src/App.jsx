import { useState } from "react";
import { Footer, Info, Navbar, ReferralCode, WalletInfo } from "./components/";
import{walletData,refCode} from './data'


function App() {


const [data, setData] = useState(walletData[0])
const [code, setCode] = useState(refCode[0])

  return (
    
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <section className="px-[34px] pt-[30px]  xl:grid xl:grid-cols-2 gap-x-[93px] xl:px-[187px]">
        <WalletInfo earnings={data.earnings} totalRef={data.totalRef} balance={data.balance}/>
        <ReferralCode refCode={code.refCode}  />
        <Info />
      </section>
      {/* Footer */}
      
      <Footer/>
    </div>
  );
}

export default App;
