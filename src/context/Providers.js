import UserContext from "./UserContext";

export default function UserProvider({children}){
    return(
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    );
}