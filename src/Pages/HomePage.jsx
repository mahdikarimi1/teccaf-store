import Hero from '../components/Hero'
import Category from '../components/Category'
import SpecialProducts from '../components/SpecialProducts'

function HomePage({ onAddToCart }) {
    return (
        <div className="">
            <Hero />
            <Category />
            <SpecialProducts onAddToCart={onAddToCart} />
        </div>
    )
}

export default HomePage;