import React from "react";
import IndustryChallenges from "./IndustryChallenges";
import WhyPurFood from "./WhyPurFood";
import IntegratedSolution from "./IntegratedSolution";
import ThinkTanks from "./ThinkTanks";

const WhyPurFoodComponent = () => {
    return (
        <>
            <div style={{ paddingTop: "80px" }}> {/* Spacer for fixed navbar */}
                <IndustryChallenges />
                <WhyPurFood />
                <IntegratedSolution />
                <ThinkTanks />
            </div>
        </>
    );
};

export default WhyPurFoodComponent;
