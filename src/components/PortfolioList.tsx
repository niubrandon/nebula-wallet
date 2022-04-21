import './PortfolioList.scss';
export default function PortfolioList({portforlioData, portfolioHeader, }) {

  const portfolioListItems = portforlioData.map((item, index) => {
      return (
        <tr key={index}>
        <td>
          {item.name}
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