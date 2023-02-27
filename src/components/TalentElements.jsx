import RowTalentElement from "./SignIn/RowTalentElement"

function TalentElements() {
    return (
      <div className='card'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 px-4'>
            <RowTalentElement/>
            <RowTalentElement/>
            <RowTalentElement/>
            <RowTalentElement/>
            </div>
      </div>
    )
  }
  
  export default TalentElements