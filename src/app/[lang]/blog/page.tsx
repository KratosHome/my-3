import {blogDate} from "@/mokDate/blogDate";

export default async function Page() {

    return (
        <>
            {blogDate.map((item, index) =>
                <div key={item.id}>
                    <h2>{item.titleEn}</h2>
                    <p>{item.descriptionEn}</p>
                    <img src={item.img} alt={item.titleEn}/>
                </div>
            )}
        </>
    );
}