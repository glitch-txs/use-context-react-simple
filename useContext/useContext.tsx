import { createContext } from "react";

//The type of variable you'll pass through, might be an object with all the varibles inside.
export type contextType = {
}
//A default variable to initiate the 'createContext'
const contextState: contextType = {
};

export const NameContext = createContext<contextType>(contextState);

interface Props {
    children: React.ReactNode;
}
//The provider that will wrap the app.tsx components, variables will go inside of 'value' prop.  
const NameProvider: React.FC<Props> = ({ children }) => {

    return (
        <div>
            <NameContext.Provider value={contextState}>
                {children}
            </NameContext.Provider>
        </div>
    );
}

export default NameProvider;