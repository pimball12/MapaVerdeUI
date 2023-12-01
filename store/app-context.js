import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext({

    auth: {

        token: '',
        isAuthenticated: false,
        user: null,
        authenticate: () => {},
        logout: () => {},
    }
});

export default function AppContextProvider({ children }) {

    const [authToken, setAuthToken] = useState();
    const [authUser, setUser] = useState();

    return (

        <AppContext.Provider value={{

            auth: {

                token: authToken,
                isAuthenticated: !!authToken,
                user: authUser,
                authenticate: ({token, user}) => {

                    console.log([token, user]);
                    setAuthToken(token);
                    setUser(user);
                    AsyncStorage.setItem('token', token);
                },
                logout: () => {

                    setAuthToken(null);
                    setUser(null);
                    AsyncStorage.clear();
                },
            }
        }}>
            {children}
        </AppContext.Provider>
    );
}