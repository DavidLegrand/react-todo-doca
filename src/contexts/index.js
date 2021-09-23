import { ListProvider } from "./List"
import { LoggedProvider } from "./Logged"
import { UserProvider } from "./User"

const GlobalProvider = ({ children }) => {

  return <UserProvider>
    <LoggedProvider>
      <ListProvider>
        {children}
      </ListProvider>
    </LoggedProvider>
  </UserProvider>
}

export default GlobalProvider