import Hero from "./components/Hero";
import Collection from "./components/collectionGrid";
import ProductDisplay from "./components/productsDisplay";
function Home(){
    return (
        <>
            <section className="w-[100dvw]">
                <Hero/>
                <Collection/>
                <ProductDisplay/>
            </section>
        </>
    )
}

export default Home