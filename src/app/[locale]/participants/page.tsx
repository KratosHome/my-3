
const data = [
    {
        username: 'John Doe',
        img: "",
        status: "active",
        role: "frontend",
        location: "Ukraine",
        technologies: ["React", "Next.js", "TypeScript"],
        
        email: "",
        github: "",
        telegram: "@Oleksandr_Alex",
        linkedin: "",
        portfolio: [],
        projects: [{
            name: "Project 1",
            description: "Description 1",
            technologies: ["React", "Next.js", "TypeScript"],
            link: "https://github.com",
            img: "",
            isActive: true,
            isPublic: true,
        }],
        openToWork: true,
        rating: 4.5,
        reviews: [],
    }
]


export default async function Page() {

    return (
        <>
            Page
        </>
    );
}