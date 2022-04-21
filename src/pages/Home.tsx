import PortfolioList from "../components/PortfolioList"
export default function Home() {

  const portforlioData = [
    { name: "Bitcoin", ticker: "BTC", quantity: 10, price: 52222 },
    { name: "Ethereum", ticker: "ETH", quantity: 100, price: 3854 },
    { name: "Cardano", ticker: "ADA", quantity: 10000, price: 1.18 },
    { name: "Solana", ticker: "SOL", quantity: 1000, price: 133 },
  ]

  const portfolioHeader = ["Name", "Ticker", "Quantity", "Price", "Total"]

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
      <div className="p-10">
      <PortfolioList portforlioData={portforlioData} portfolioHeader={portfolioHeader} />
      </div>
    
    </div>
  )
}