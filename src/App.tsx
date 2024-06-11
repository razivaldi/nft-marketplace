import BrowseCategory from './components/BrowseCategory'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import NFTHighlights from './components/NFTHighlights'
import SubscribeWidget from './components/SubscribeWidget'
import TopCreator from './components/TopCreator'
import TrendingCollection from './components/TrendingCollection'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <TrendingCollection />
      <TopCreator />
      <BrowseCategory />
      <NFTHighlights />
      <SubscribeWidget />
      <Footer />
    </>
  )
}

export default App
