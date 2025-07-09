import { FeatureProps } from "@/constant/features";
import { FaCrown } from "react-icons/fa";

export const FeatureCard = ({ icon: Icon, title, description, premium }: FeatureProps) => {
  return (
    <div className="bg-base-100/75 backdrop-blur-xl rounded-box shadow-xl p-8 border border-base-200">
      <div className="w-16 h-16 bg-primary/15 rounded-3xl flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-primary" />
      </div>

      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-xl font-medium text-base-content">{title}</h3>
        {premium && <FaCrown className="h-4 w-4 text-yellow-500" />}
      </div>

      <p className="text-base-content/80 font-light leading-relaxed">{description}</p>
    </div>
  );
};
