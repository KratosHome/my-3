import InProgress from "@/components/UI/InProgress/InProgress";

const projects = [
    {
        name: "Sharm Beauty",
        desc: "vsfdv",
        img: "",
        team: [
            {
                name: "Oleg Tkach",
                role: "Frontend Developer",
                img: "",
                url: ""
            }
        ]
    }
]


export default async function Page() {

    return (
        <>
            <InProgress/>
        </>
    );
}