import ReactDOM from 'react-dom/client'

import App from './app.jsx'
import data from './data.json'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App data={data} />)
