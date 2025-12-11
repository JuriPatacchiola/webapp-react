import NavBar from "./NavBar"

export default function Header() {


  const menu = [
    {
      id: 1,
      Text: 'Home',
      link: '/'
    },
    {
      id: 2,
      Text: 'Contacts',
      link: '/Contacts'
    }
  ]
  return (

    <>
      <header>
        <NavBar menu={menu} />
      </header>
    </>
  )

}