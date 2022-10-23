import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const LeftSideNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('https://dragon-news-server-blond-eight.vercel.app/news-categories')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 style={{color:'white'}}>Catagories {categories.length}</h2>
            {
                categories.map(catagory=><p key={catagory.id}>
                    <Link to={`/category/${catagory.id}`}>{catagory.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;