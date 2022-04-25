
interface Props {
  label: string,
  color: string
}
export default function BaseButton( { label, color }: Props ) {

  const buttonClick = () => {
    console.log("button clicked!")
  }
  return (
    <>
      <button 
        className={`w-fit px-4 py-1 bg-${color}-300 text-white font-semibold text-lg rounded-md`}
        style={{ "backgroundColor": `${color}`}}
        onClick={buttonClick}
      >
        { label }
      </button>
    </>
  )
}