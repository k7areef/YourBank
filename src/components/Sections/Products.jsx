import SectionHeader from "./common/SectionHeader";
import data from "@data/products.json";
import workBagIcon from "@assets/icons/work-bag.png";
import saveIcon from "@assets/icons/save.png";
import monyIcon from "@assets/icons/money.png";

const iconsMaper = {
    "work-bag": workBagIcon,
    "save": saveIcon,
    "mony": monyIcon
}

function Products() {
    const { title, wordsColored, description, products } = data;
    return (
        <section className="products-section py-5 md:py-10" id="products">
            <div className="container">
                <SectionHeader
                    title={title}
                    wordsColored={wordsColored}
                    description={description}
                />
                <div className="cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        products.map((pro, index) => (<div className="product-card text-center p-5 not-first-of-type:border-s not-first-of-type:border-grey-15" key={pro.id || index}>
                            <div className="icon-wrapper mb-3 w-23 h-23 mx-auto flex items-center justify-center rounded-full bg-linear-to-b from-green-60/5 to-green-60/0">
                                <div className="icon-container w-18 h-18 flex items-center justify-center rounded-full bg-linear-to-b from-green-60/10 via-green-60/0 via-47% to-transparent">
                                    <img
                                        src={iconsMaper[pro.icon]}
                                        alt={pro.title}
                                    />
                                </div>
                            </div>
                            <h2 className="mb-2 text-lg sm:textxl md:text-2xl">{pro.title}</h2>
                            <p>{pro.description}</p>
                        </div>))
                    }
                </div>
            </div>
        </section>
    )
}

export default Products;