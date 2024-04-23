
const projects = [
    {
        name: "Sharm Beauty",
        desc: "e-comers проект, косметики та парфюмерії",
        img: "",
        technologies: ["React", "Redux", "Node.js", "MongoDB"],
        status: "active",
        team: [
            {
                username: "Oleg Tkach",
                roles: ["frontend", "backend"],
                img: "",
                technologies: ["React", "Redux"]
            }
        ]
    }
]


export default async function Page() {

    return (
        <>
            <button>створити ідею</button>

        </>
    );
}