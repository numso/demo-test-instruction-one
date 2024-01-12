import Starship from './starship.jsx'

export default function App ({ data }) {
  return (
    <div>
      {data.starships.map(datum => (
        <Starship
          key={datum.id}
          formalName={datum.name}
          price={datum.price}
          measurement={datum.measurement}
        />
      ))}
    </div>
  )
}
