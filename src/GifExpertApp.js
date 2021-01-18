import React,{useState} from 'react'
import {AddCategory} from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Puch', 'Samuraix' , 'Dragon Ball']
    const [categories, setcategories] = useState(['One Punch'])

    const handleAdd =()=>{

        // categories.push('Lupin')
        setcategories([...categories,'lupin']);

    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory  setcategories={setcategories}/>
            <hr/>
             {/* <button onClick={handleAdd}>Agregar</button>  */}
            <ol>
   

                    {
					categories.map( categorie =>  {
						//  return <li key={ categorie} >{categorie}</li>  
						return <GifGrid
							key={categorie}
							categorie={categorie}
						/>
                        })

                    }
                    
                    

            </ol>

        </div>
    )
}
