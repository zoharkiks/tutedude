import {Navbar, ReferralCode, WalletInfo} from "./components/";

function App() {
  return (
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar/>
     {/* Body */}
<section className="px-9 bg-[#f9f9f9] pt-[30px] pb-9 xl:grid xl:grid-cols-2" >
  <WalletInfo/>
  <ReferralCode/>
</section>
     {/* Footer */}
    </div>
  );
}

export default App;
