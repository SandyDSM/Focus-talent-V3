import RowTalentElement from "./SignIn/RowTalentElement"

function TalentElements({aniosc}) {
    return (
      <div className='card'>
          
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 px-4'>
          {aniosc?.map((anio)=>(
            <RowTalentElement anio={anio}/>
            ))}
            </div>
      </div>
    )
  }
  
  export default TalentElements