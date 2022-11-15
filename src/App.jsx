import { Info, Navbar, ReferralCode, WalletInfo } from "./components/";

function App() {
  return (
    <div className="font-poppins">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <section className="px-[34px] pt-[30px] pb-9 xl:grid xl:grid-cols-2 gap-x-[93px] xl:px-[187px]">
        <WalletInfo />
        <ReferralCode />
        <Info />
      </section>
      {/* Footer */}
    </div>
  );
}

export default App;
