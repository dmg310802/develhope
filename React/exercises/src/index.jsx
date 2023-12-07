import App from "./App";
import {createRoot} from 'react-dom/client'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

// I cannot use the Hello component more than once since I am returning it in the App.jsx, and I can also not render the Message since it is within the Hello component which is not rendered.

root.render(<App/>);