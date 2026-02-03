import ButtonLink from "./ButtonLink";

const PricingItem = ({title, price, icon, mainBtn2, priceList, pricingColor}) => {
    return (
        <div className="col-lg-4 col-md-8 col-sm-10">
            <div className={`single_pricing text-center ${pricingColor} mt-30`} data-wow-duration="1.3s" data-wow-delay="0.2s" style={{visibility: "visible", animationDuration: "1.3s", animationDelay: "0.2s", animationName: "fadeInUp"}}>
                <div className="pricing_top_bar">
                    <h5 className="pricing_title">{title}</h5>
                    <i className={`lni ${icon}`}></i>
                    <span className="price">{price}</span>
                </div>
                <div className="pricing_list">
                    <ul>
                        {priceList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="pricing_btn">
                    <ButtonLink myClass={mainBtn2} text="Get Started" href="#" />
                </div>
            </div>  {/* single pricing */}
        </div>
    );
}

export default PricingItem;