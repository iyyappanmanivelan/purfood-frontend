import Head from "next/head";
import WhyPurFoodComponent from "@/components/pages/WhyPurFood";

export default function WhyPurFood() {
    return (
        <>
            <Head>
                <title>Why Choose PUR Food LLP - Expert Food Safety Solutions</title>
                <meta name="description" content="Discover why PUR Food LLP is your trusted partner for food safety. Expert trainers, comprehensive solutions, and proven track record in hospitality training and FSSAI compliance." />
                <meta name="keywords" content="food safety expert, why choose PUR Food, integrated food solutions, food safety consulting, hospitality training" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <WhyPurFoodComponent />
        </>
    );
}
