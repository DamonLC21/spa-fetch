import HomePage from './pages/home.js'
import CharactersPage from './pages/characters.js'

const main = document.querySelector('#content')
const routes = {
    '/': HomePage,
    '/characters': CharactersPage,
}
