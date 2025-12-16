import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const show = () => setIsLoading(true);
    const hide = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{ isLoading, show, hide }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
