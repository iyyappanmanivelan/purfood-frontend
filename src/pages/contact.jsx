import Head from "next/head";
import ContactComponent from "@/components/pages/Contact";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - PUR Food LLP | Food Safety Training & Consulting</title>
                <meta name="description" content="Get in touch with PUR Food LLP for food safety training, FSSAI compliance, and hospitality consulting. Contact Ms. Nagalakshmi at 7305225182 for partnership opportunities." />
                <meta name="keywords" content="contact PUR Food, food safety consultation, partnership opportunities, Chennai food safety, hospitality training contact" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ContactComponent />
        </>
    );
}
