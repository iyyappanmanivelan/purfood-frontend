import Head from "next/head";
import ServicesComponent from "@/components/pages/Services";

export default function Services() {
    return (
        <>
            <Head>
                <title>Our Services - FoSTaC Training, FSSAI Compliance & Food Safety Consulting</title>
                <meta name="description" content="PUR Food LLP offers FoSTaC training, FSSAI compliance support, food safety audits, industry training, and hospitality consulting services across India." />
                <meta name="keywords" content="FoSTaC training, FSSAI compliance, food safety audit, industry training, hospitality consulting, food safety services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ServicesComponent />
        </>
    );
}
