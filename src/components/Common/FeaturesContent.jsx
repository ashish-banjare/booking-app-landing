const FeaturesContent = function({title, subtitle}) {
    return (
        <div className="features_content">
            <h4 className="features_title">{title}</h4>
            <p>{subtitle}</p>
        </div>
    );
};

export default FeaturesContent;
