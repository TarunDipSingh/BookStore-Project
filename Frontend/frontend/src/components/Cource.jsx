import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios  from "axios";

export default function Cource() {
    const [book, setBook] = useState([])

    useEffect(() => {
        const getBook = async () => {
            try {
              const res = await axios.get('http://localhost:4001/book')
              console.log(res.data);
              setBook(res.data)
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook();
    }, [])

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        We're delight to have you <span className='text-green-500'>Here! :)</span>
                    </h1>
                    <p className='mt-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus magni debitis voluptate quibusdam saepe est alias enim asperiores, ipsam, quae repellendus doloremque eligendi. Minima optio esse non repellat nesciunt fugiat corrupti, repudiandae quae pariatur assumenda sunt molestias, natus architecto eveniet? Quis placeat assumenda rem. Ab dolorem illum dolor voluptatum doloribus deleniti et doloremque quo.
                    </p>
                    <Link to="/"><button className=' mt-6 bg-green-500 hover:bg-green-700 duration-300 text-white rounded-md px-5 py-2 '>Back</button></Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
