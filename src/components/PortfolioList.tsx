import './PortfolioList.scss';
import BaseButton from './BaseButton';
import { PortfolioType } from '../types';

interface Props {
  portfolioData: PortfolioType[],
  portfolioHeader: string[]
}
export default function PortfolioList({portfolioData, portfolioHeader} :Props) {

  const portfolioListItems = portfolioData.map((item, index) => {
    return (
      <tr key={index}>
        <td>
          <div className='flex gap-4'>
            <img className="w-6 h-6" src={item.src}></img>
            <span>{item.name}</span>
          </div>           
        </td>
        <td>
          {item.ticker}
        </td>
        <td>
          {item.quantity}
        </td>
        <td>
          ${item.price}
        </td>
        <td>
          ${item.price * item.quantity}
        </td>
        <td>
          <BaseButton label={"Buy"} color={"green"} />
        </td>
      </tr>
    )
    
  })
   
  const portfolioListHeader = portfolioHeader.map((item, index) => {
    return ( 
      <th key={index}>
        {item}
      </th>
    )
  
  })
  return (
    <>
      <table>
        <thead>
          <tr>
            { portfolioListHeader }
          </tr>
        </thead>
        <tbody>
          { portfolioListItems }
        </tbody>    
      </table>
    </>
  )
}