import { useEffect, useState } from 'react'
import axios from 'axios'
import './MyComponent.css'

export const MyComponent = () =>{

    const [ data, setData ] = useState([])

    useEffect(()=>{

        axios.get('http://localhost:3030/posts')
            .then(response =>{
                setData(response.data)
            })
            .catch(error =>{
                console.error('Error: '+error)
            })

        
    })

    return (
        <div>

            {
               
                    <p>{data.name}</p>
              
            }

        </div>
    )

}