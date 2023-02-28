import './App.css';
import Card from './components/Card';

const App = () => {

  return (
    
    <div className="app">
      <h1>Bookish Vegas</h1>
      <div className="cards">
      <Card
      img="./src/assets/lvbf.png"
      name="Las Vegas Book Festival"
      description="Annual Event"
      link="https://lasvegasbookfestival.com"
       />

<Card
      img="./src/assets/avantpop.png"
      name="Avantpop Books"
      description="Bookstore"
      link="https://www.avantpopbooks.com"
       />

<Card
      img="./src/assets/bauman.png"
      name="Bauman Rare Books"
      description="Rare Bookstore"
      link="https://www.baumanrarebooks.com/about-us/locations.aspx?location=lasvegas"
       />

<Card
      img="./src/assets/coppercat.png"
      name="Copper Cat Books"
      description="Used Bookstore"
      link="https://www.coppercatbooks.com"
       />

<Card
      img="./src/assets/dragoncastle.png"
      name="Dragon Castle Books"
      description="Used Bookstore"
      link="https://dragon-castle-books.square.site"
       />

<Card
      img="./src/assets/writersblock.png"
      name="The Writer's Block"
      description="Bookstore"
      link="https://www.thewritersblock.org"
       />

<Card
      img="./src/assets/lvccld.png"
      name="Las Vegas-Clark County Library District"
      description="Libraries"
      link="https://thelibrarydistrict.org"
       />

<Card
      img="./src/assets/rave.png"
      name="RAVE - Readers and Authors Vegas Event"
      description="Annual Event"
      link="https://www.facebook.com/groups/vegasauthorsigning2022/"
       />

<Card
      img="./src/assets/lasvegasbooks.png"
      name="Las Vegas Books"
      description="Used Bookstore"
      link="https://www.facebook.com/LasVegasBooks"
       />

<Card
      img="./src/assets/analogdope.png"
      name="Analog Dope Store"
      description="Book and Record Store"
      link="https://www.analogdope.com/"
       />
       </div>
    </div>
  )
}

export default App;
