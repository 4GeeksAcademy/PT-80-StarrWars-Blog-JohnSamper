import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
import { StoreProvider } from './hooks/useGlobalReducer';  // Import the StoreProvider for global state management
import { FavoritesProvider } from './Context/Favoritecontext';

const Main = () => {
    return (
        <FavoritesProvider>
            <React.StrictMode>  
                {/* Provide global state to all components */}
                <StoreProvider> 
                    {/* Set up routing for the application */} 
                    <RouterProvider router={router}>
                    </RouterProvider>
                </StoreProvider>
            </React.StrictMode>
        </FavoritesProvider>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
