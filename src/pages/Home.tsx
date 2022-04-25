import PortfolioList from "../components/PortfolioList"
import { PortfolioType } from "../types"

export default function Home() {

  const portfolioData : PortfolioType[] = [
    { name: "Bitcoin", ticker: "BTC", quantity: 10, price: 52222, src: "../asset/bitcoin.png" },
    { name: "Ethereum", ticker: "ETH", quantity: 100, price: 3854, src: "../asset/ethereum.png" },
    { name: "Cardano", ticker: "ADA", quantity: 10000, price: 1.18, src: "../asset/cardano.png" },
    { name: "Solana", ticker: "SOL", quantity: 1000, price: 133, src: "../asset/solana.png" },
  ]

  const portfolioHeader = ["Name", "Ticker", "Quantity", "Price", "Total", "Trade"]

  return (
    <div>
      <section className="flex w-full h-[500px] justify-around">
        <div className="flex flex-col items-start justify-between w-2/3 px-8 py-3 mx-6">
          <span className="text-7xl font-bold">Create you first crypto wallet! </span>
          <span className="text-3xl">Nebula wallet is the easiest place to keep your crptocurrency! </span>
          <div className="flex gap-4">
            <input className="w-[240px] h-[64px] shadow-lg" placeholder='Email address' name="email" type="email" />
            <button className="h-[64px] w-[144px] bg-sky-600 rounded text-white">Get started</button>
          </div>       
        </div>
        <div className="grow">
          <img className="w-[560px] h-[500px]" src="../asset/mobile-wallet.png" />
        </div>
      </section>

      <section id="statistic-banner" className="w-full h-60 bg-sky-700 flex justify-around items-center text-7xl text-white font-medium">
        <div className="flex flex-col items-center gap-2">
          <span>$500B</span>
          <span className="text-lg font-medium">volume</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span>100+</span>
          <span className="text-lg font-medium">assets</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span>1000+</span>
          <span className="text-lg font-medium">users</span>
        </div>
      </section>

      <div className="p-10">
        <PortfolioList portfolioData={portfolioData} portfolioHeader={portfolioHeader} />
      </div>

      <section className="w-full h-[360px] flex items-center bg-gray-100 justify-between">
        <div className="flex flex-col gap-4 pl-6" >
          <h2 className="font-semibold text-3xl">
            Earn up to $7 worth of crpto
          </h2>
          <p className="w-[350px]">
            Discover how specific crptocurrencies work - and get a bit of each crypto to try out for yourself
          </p>
          <button className="h-[64px] w-[144px] bg-sky-600 rounded text-white">Start earning</button>
        </div>
        <img className="w-[400px] h-[300px]" src="../asset/bonus.png"></img>
      </section>

      <section
        id="subscription-plans"
        className="w-full h-fit flex flex-col items-center bg-gray-400 justify-between py-4 gap-4">
        <div className="flex flex-col justify-center items-center gap-4 pl-6 w-full" >
          <h2 className="font-semibold text-3xl">
            Subscription Plans:
          </h2>
          <p className="text-gray-200 px-36">
            Discover how specific crptocurrencies work - and get a bit of each crypto to try out for yourself
          </p>
        </div>
        <div className="w-full h-fit grid grid-cols-1 items-center sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-2">
            <span>Free Tier </span>
            <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img>
            <ul>
              <li>- Unlimited free transactions</li>
              <li>- Unlimited free NFTs transfer</li>
            </ul>
            <button className="h-[64px] w-[144px] bg-sky-600 rounded text-white">Subscribe</button></div>
          <div className="flex flex-col items-center justify-center gap-2"> 
            <span>Gold Tier $99.99/yr </span>
            <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img>
            <ul>
              <li>- Fixed term auto-staking</li>
              <li>- Unlimited free token swaps</li>
            </ul>
            <button className="h-[64px] w-[144px] bg-sky-600 rounded text-white">Subscribe</button>
          </div>
          <div className="flex flex-col items-center justify-center gap-2"> 
            <span>Plantinum Tier $999/yr </span>
            <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img> 
            <ul>
              <li>- Flexible term auto-staking</li>
              <li>- Unlimited NFT trading</li>
            </ul>
            <button className="h-[64px] w-[144px] bg-sky-600 rounded text-white">Subscribe</button></div>
        </div>
      </section>

      <section
        id="content-plans"
        className="w-full h-fit flex flex-col items-center bg-white justify-between py-4">
        <div className="flex flex-col justify-center items-center gap-4 pl-6 w-full" >
          <h2 className="font-semibold text-3xl">
            Create your cryptocurrency portfolio today
          </h2>
          <p className="text-gray-200 px-36">
           Nebula wallet is the most safe place to keep your digital assets
          </p>
        </div>
        <img className="w-fit h-fit px-24" src="../asset/wallet-page.png"></img>
      </section>

      <section
        id="features-section"
        className="w-full h-fit flex flex-col items-center bg-gray-300 justify-between py-4">
        <div className="flex flex-col justify-center items-center gap-4 pl-6 w-full" >
          <h2 className="font-semibold text-3xl">
            The most trusted cryptocurrency wallet
          </h2>
          <p className="text-gray-200 px-36">
            Here are a few features why you should choose Nebula wallet
          </p>
        </div>
        <div className="w-full h-fit grid grid-cols-1 items-center sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img>
            <p>Keep your cryptocurrency and NFTs in one place</p>           
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img>
            <p>Maximize your profit with auto-staking</p>           
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img>
            <p>We store the vast majority of digital assets</p>           
          </div>
        </div>
      </section>

      <section className="w-full h-[360px] flex flex-col items-center bg-gray-100 justify-around">
        <div className="flex flex-col gap-4 items-center" >
          <h2 className="font-semibold text-3xl px-36">
            Get started in a few minutes
          </h2>
          <p>
            Discover how specific crptocurrencies work - and get a bit of each crypto to try out for yourself
          </p>
        
        </div>
        <div className="flex justify-center items-center w-full gap-3">
          <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img>
          <div className="h-[2px] w-36 bg-slate-500"></div>
          <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img>
          <div className="h-[2px] w-36 bg-slate-500"></div>      
          <img className="w-[200px] h-[200px]" src="../asset/logo.png"></img>
        </div>
      
      </section>

      <select name="languages" id="lang-selector">
        <option value="english">
          English
        </option>
        <option value="french">
          French
        </option>
      </select>
      <select name="theme" id="theme-selector">
        <option value="light">
          Light
        </option>
        <option value="dark">
          Dark
        </option>
      </select>
    </div>
  )
}