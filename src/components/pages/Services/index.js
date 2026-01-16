import React from "react";
import TrainingPortfolio from "./TrainingPortfolio";
import IndustryTraining from "./IndustryTraining";
import TrainerCredentials from "./Credentials";
import Regulations from "./Regulations";
import Value from "./Value";

const ServicesComponent = () => {
    return (
        <>
            <div style={{ paddingTop: "80px" }}>
                <TrainingPortfolio />
                <IndustryTraining />
                <TrainerCredentials />
                <Regulations />
                <Value />
            </div>
        </>
    );
};

export default ServicesComponent;
