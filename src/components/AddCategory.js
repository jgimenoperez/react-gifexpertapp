import React, {useState} from 'react'
import Proptypes from 'prop-types'

export const AddCategory = ( {setcategories} ) => {

    const [inputvalue, setinputvalue] = useState(``)

    const handleImputChange=(e)=>{

            // console.log(e.target.value)
            setinputvalue(e.target.value)
    }

    const hasdleSubmit=(e)=>{

            e.preventDefault()

            if (inputvalue.trim().length>2)
            {
                setcategories( cats => [inputvalue,...cats,]);      
                setinputvalue('')
            }
            // console.log('Submit hecho')
            
            // console.log(props.otracosa)
    }



    return (
        <div>

           <form onSubmit={hasdleSubmit}>

                <input
                    type="text"
                    value={inputvalue}
                    onChange={ handleImputChange }
                />

            </form>    

            
        </div>
    )
}
 
AddCategory.prototypes={
    setcategories: Proptypes.func.isRequired
}