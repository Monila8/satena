import { useContext } from 'react';
import { NavbarContextWrapper } from '../components/NavbarContextWrapper'
import { Footer } from 'satena-storybook/dist/Footer'
import { Hero } from 'satena-storybook/dist/Hero'
import { Comments } from 'satena-storybook/dist/Comments'
import { Featured } from 'satena-storybook/dist/Featured'
import { Search } from 'satena-storybook/dist/Search'
import { ThemeContext } from '../Contexts';

export const LandingPage = () => {
  const [theme] = useContext(ThemeContext)
  const isDarkMode = theme === 'dark' 

  const commentsData = [
    { avatarURL: 'https://i.pravatar.cc/300', author: 'Erick Padilla', comment: "“Necesitaba cambiar las fechas de mi viaje, me comuniqué con Satena y fue fácil y rápido hacerlo. El mejor servicio al cliente que he usado”", from: "Medellín", to: "Caracas" },
    { avatarURL: 'https://i.pravatar.cc/301', author: 'Andrés Guzmán', comment: "“Fue un vuelo muy puntual, sin ningún problema al momento de comprar. Recomiendo completamente usar Satena para viajar”", from: "Bogotá", to: "Nuquí" },
  ]

  const featuredCardsData = [
    {
      backgroundImage: "https://picsum.photos/300",
      headline: "La macarena",
      price: "$130.000",
      dates: "5 nov - 13 dic",
    },
    {
      backgroundImage: "https://picsum.photos/300",
      headline: "La macarena",
      price: "$130.000",
      dates: "5 nov - 13 dic",
    },
    {
      backgroundImage: "https://picsum.photos/300",
      headline: "La macarena",
      price: "$130.000",
      dates: "5 nov - 13 dic",
    },
  ]

  const peopleOptionsData = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
  ]
  const categoryOptionsData = [
    { value: "economy", label: "eco" },
    { value: "vip", label: "vip" },
  ]

  return (
    <div className={`theme-${theme}`}>
      <NavbarContextWrapper />
      <Hero theme={theme} />
      <Comments data={commentsData} theme={theme} />
      <Featured featuredCards={featuredCardsData} theme={theme} />
      <Search peopleOptions={peopleOptionsData} categoryOptions={categoryOptionsData} theme={theme} />
      <Footer socialNetworks={[{ icon: 'insta' }]} darkMode={isDarkMode} theme={theme} />
    </div>
  )
}
