import { articles } from "../data"
import Article from "./Article"

const Main = () => {
  return (
    <main className="h-full flex items-center justify-center px-4 pb-6">
      <div className="grid gap-6">
      {articles.map((article, index) => {
        const {id, img, title, country, googleMapsLink, dates, text} = article;
        return (
          <Article key={id} img={img} title={title} country={country} googleMapsLink={googleMapsLink} dates={dates} text={text} className={`${index +1 !== articles.length ? 'border-b border-gray-200' : null}`} />
        )
      })}
    </div>
    </main>
  )
}

export default Main