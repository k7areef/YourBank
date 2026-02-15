import SectionHeader from "./common/SectionHeader";

function Products() {
    return (
        <section className="products-section py-5 md:py-10" id="products">
            <div className="container">
                <SectionHeader
                    title="Our Products"
                    wordsColored={["Products"]}
                    description="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"
                />
            </div>
        </section>
    )
}

export default Products;