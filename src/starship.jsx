export default function Starship ({ formalName, price, measurement }) {
  return (
    <div className='starship'>
      <label>{formalName}</label>
      <div>
        {price} {measurement}
      </div>
    </div>
  )
}
