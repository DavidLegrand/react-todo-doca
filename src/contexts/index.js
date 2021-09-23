import { LoggedProvider } from "./Logged"
import { UserProvider } from "./User"

const GlobalProvider = ({ children }) => {

  return <UserProvider>
    <LoggedProvider>
      {children}
    </LoggedProvider>
  </UserProvider>
}

export default GlobalProvider