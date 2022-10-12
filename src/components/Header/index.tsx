import useCustomHook from "./useCustomHook"


export const Header = () => {
  const { changeThemeMode } = useCustomHook()


  return (
    <header>
      <button onClick={changeThemeMode}>muda tema</button>
    </header>
  )
}

