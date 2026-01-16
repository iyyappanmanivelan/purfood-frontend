import Head from "next/head";
import HomeComponent from "@/components/pages/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>PUR Food LLP - Food Safety Training & Compliance Solutions</title>
        <meta name="description" content="PUR Food LLP offers comprehensive food safety training, FoSTaC certification, FSSAI compliance, and hospitality training across India. Single point solution for all food-related activities." />
        <meta name="keywords" content="PUR Food, food safety training, FoSTaC, FSSAI compliance, hospitality training, food safety audit, Chennai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PUR Food LLP - Food Safety Training & Compliance Solutions" />
        <meta property="og:description" content="Pleasantly Unifying & Revolutionizing Food - Your trusted partner for food safety and hospitality training." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PUR Food LLP - Food Safety Training & Compliance Solutions" />
        <meta name="twitter:description" content="Pleasantly Unifying & Revolutionizing Food - Your trusted partner for food safety and hospitality training." />
      </Head>
      <HomeComponent />
    </>
  );
}
