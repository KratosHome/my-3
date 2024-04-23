import TrustedBy from "@/components/home/TrustedBy/TrustedBy";

export default async function WrapperRequest() {
    const response = await fetch(`${process.env.NEXT_URL}/api/reviews`);
    const data = await response.json();

    return (
        <TrustedBy reviews={data}/>
    );
};
