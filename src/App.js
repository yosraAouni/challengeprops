import React from 'react'
import './App.css';
import Cards from './Component/Cards';

function App() {
  const data=[{city:'madrid',description:"Située au centre de l'Espagne, Madrid, sa capitale, est une ville dotée d'élégants boulevards et de vastes parcs très bien entretenus comme le Retiro. Elle est réputée pour ses riches collections d'œuvres d'art européennes, avec notamment celles du musée du Prado, réalisées par Goya, Velázquez et d'autres maîtres espagnols. Au cœur de la vieille Madrid des Habsbourgs se trouve la Plaza Mayor, bordée de portiques, et, à proximité, le Palais royal baroque et son Armurerie, qui comporte des armes historiques.",imageUrl:'https://www.okvoyage.com/wp-content/uploads/2019/10/visiter-Madrid.jpg'},
                {city:'paris',description:"Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré",imageUrl:'https://res.cloudinary.com/hzekpb1cg/image/upload/c_fill,h_410,w_800,f_auto/s3/public/prod/2019-02/Paris.jpg'},
                {city:'moscou',description:"Moscou, sur la Moskva à l'ouest de la Russie, est la capitale cosmopolite du pays. Son centre historique est le Kremlin, résidence du Président et complexe abritant les trésors des tsars dans l'Armurerie. À l'extérieur, la place Rouge est le centre symbolique de la Russie. Le mausolée de Lénine, le Musée historique d'État et sa vaste collection, et la cathédrale Saint-Basile-le-Bienheureux, célèbre pour ses clochers à bulbe colorés, y sont implantés",imageUrl:'https://www.guidesulysse.com/images/destinations/dreamstime_xxl_21095877.jpg'},
                {city:'Kiev',description:"Kiev est la capitale de l'Ukraine, séparée en deux par le Dniepr et réputée pour son architecture religieuse, ses monuments séculiers et ses musées d'histoire. La laure des grottes de Kiev, datant du XIe siècle, est un monastère et un site de pèlerinage regroupant plusieurs églises aux dômes dorés. Elle est célèbre pour ses catacombes bordées des chambres funéraires de moines orthodoxes, ainsi que pour une collection d'objets en or datant de l'époque scythe antique.",imageUrl:'https://cdn.turkishairlines.com/m/3ca6c0776a640b70/original/1400_500.jpg'},
                {city:'New York',description:"New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square.",imageUrl:'https://static.rentcars.com/imagens/modules/localidade/about/983-desktop-location-description.png'}]
  return (
    <div className="App">
      <Cards city={data[0].city} description={data[0].description} imageUrl={data[0].imageUrl} /> 
      <Cards city={data[1].city} description={data[1].description} imageUrl={data[1].imageUrl}/>
      <Cards city={data[2].city} description={data[2].description} imageUrl={data[2].imageUrl}/>
      <Cards city={data[3].city} description={data[3].description} imageUrl={data[3].imageUrl}/>
      <Cards city={data[4].city} description={data[4].description} imageUrl={data[4].imageUrl}/>
    </div>
  );
}

export default App;
