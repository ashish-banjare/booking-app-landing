import { Lineicons } from "@lineiconshq/react-lineicons";

const FeaturesIcon = ({ icon, size, color, width }) => {
  return (
        <div className="features_icon">
            {/* <i className="lni lni-exit-down"></i> */}
            <i>
                <Lineicons icon={icon} size={size || 50} color={color || "white"} strokeWidth={width || 1.5} />
            </i>
        </div>
  );
};

export default FeaturesIcon;