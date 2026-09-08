import {useState, useEffect} from "react";

type CategoryType = {
    "id": number,
    "name": string,
    "slug": string,
    "url": string,
    "parentId": null|number
}

const CategoriesList = ()=>{
    const URL = "http://localhost:3000/categories";
    const [categories, setCategories] = useState<CategoryType[]>([])
    useEffect(()=>{
        fetch(URL,{     headers: {         "ngrok-skip-browser-warning": "true"     } })
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                console.log(data)
            })
    },[categories.length])
    return (<>{categories.length==0?"List is empty":categories.map(category=>{
        return <p key={category.id}>{category.id} {category.name}</p>
    })}</>)
}
export default CategoriesList