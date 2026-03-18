import SectionHeader from "./common/SectionHeader";
import data from "@data/useCases.json";
import handMoneyIcon from "@assets/icons/hand-money.png";
import saveMoneyIcon from "@assets/icons/save-money.png";
import bankIcon from "@assets/icons/bank.png";
import openBookMoneyIcon from "@assets/icons/open-book.png";
import companyIcon from "@assets/icons/company.png";
import moneyIcon from "@assets/icons/money.png";
import analyticsIcon from "@assets/icons/analytics.png";
import moneyCoinIcon from "@assets/icons/money-coin.png";

const iconsMaper = {
    "money-hand": handMoneyIcon,
    "save-money": saveMoneyIcon,
    "bank": bankIcon,
    "book-open": openBookMoneyIcon,
    "company": companyIcon,
    "money": moneyIcon,
    "analytics": analyticsIcon,
    "money-coin": moneyCoinIcon
}

function UseCases() {
    const { title, wordsColored, description } = data;
    return (
        <section className="use-cases-section" id="useCases">
            <div className="container">
                <SectionHeader
                    title={title}
                    wordsColored={wordsColored}
                    description={description}
                />
            </div>
        </section>
    )
}

export default UseCases;