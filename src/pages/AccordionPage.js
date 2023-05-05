import Accordion from "../components/Accordion";

function AccordianPage() {
    const items = [
        {
            id:1,
            label: "can I use react on a project" ,
            content : "YOu can use react on every proct you want"
        },
        {
            id:2,
            label: "can I use javaScript on a project",
            content: "YOu can use react on every proct you want"
        },
        {
            id:3,
            label: "can I use HTML on a project",
            content: "YOu can use react on every proct you want"
        }
    ]
    
    return <Accordion items = {items} />
}

export default AccordianPage;