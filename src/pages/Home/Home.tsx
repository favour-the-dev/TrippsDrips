import Hero from "./components/Hero";
import Collection from "./components/collectionGrid";
import ProductDisplay from "./components/productsDisplay";
import Services from "./components/Services";
import Banner from "./components/Banner";
function Home(){
    return (
        <>
            <section className="w-[100dvw]">
                <Hero/>
                <Collection/>
                <ProductDisplay/>
                <Services/>
                <Banner/>
            </section>
        </>
    )
}

export default Home