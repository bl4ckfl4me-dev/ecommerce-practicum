import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createContext } from 'react'
import UserStore from './stores/UserStore.ts';
import {ThemeProvider} from '@material-tailwind/react'
import './index.css'

interface IContext {
    user: UserStore,
}

export const Context = createContext<IContext>({
    user: new UserStore(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <Context.Provider value={{
            user: new UserStore(),
        }}>
            <App />
        </Context.Provider>
    </ThemeProvider>
)
