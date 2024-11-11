import {
    Nav,
    SmoothScrollHero,
    ShuffleHero
} from '../components/molecules'

const Home = () => {
    return (
        <div className='uppercase font-roxborough'>
            {/* <Nav /> */}
            <section>
                <h1 className='text-6xl text-center'>
                    BRIDGING THE GAP BETWEEN A TIMELESS HAIRCUT AND CRAFTMANSHIP
                </h1>
                <button
                className='uppercase bg-background text-primary px-4 py-2 font-gt'>
                    About us
                </button>
            </section>
            <section className='bg-background text-primary'>
                <p>If you are reading thisk, you need a haircut</p>
            </section>
        </div>
    )
}

export default Home