import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Quests({categories}) {

  // const [isShown, setIsShown] = useState(false);

  const questButtonDisplay = (
    <div className='container'>
       POPULAR QUESTS
        {
        categories.map(category => 
          <Link 
          className="btn"
          key={category.id}
          category={category}
          to={`/categories/${category.id}`}
            >{category.category_name}</Link>       
                )} 
    </div>
     
  )
  return (
    <ul className='dd-container'
      style={{ position: 'relative'}}
      // onMouseEnter={() => setIsShown(true)}
      // onMouseLeave={() => setIsShown(false)}
      > 
      Quests
        {
        // isShown && 
        questButtonDisplay
            }
      </ul>   
    )
      }
// }

export default Quests


