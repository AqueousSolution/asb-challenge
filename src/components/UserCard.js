const UserCard = ({name,state,address,status,entryNum, entryType, risk}) => {

     const handleResponsiveness= (str) =>{
          return str.split(" ", 1)
     }

    return ( 
        <div className='user-card'>
             <div className='flex'>
                <input type='checkbox'/>
                <img src='./images/badge.svg' className='badge' alt='badge'/> 
             </div>
             
           <p className='user-card_name'>{name}</p>
           <p className='name_mobile'>{handleResponsiveness(name)}</p>
           <div className='user-card_location'>
                <p className='state'>{state}</p>
                <p className='address'>{address}</p>
           </div>

           <p className={status==='No Issues'?'no-issues':'issues'}>{status}</p>

           <div className='user-card_entry'>
                <p className='entry-number'>{entryNum}</p>
                <p className='entry-number_mobile'>{handleResponsiveness(entryNum)}</p>
                <p className='entry-type'>{entryType}</p>
                
           </div>

           <div className='user-card_risk'>
                <div className='flex'> 
                    <img src={risk==='Low Risk'?'./images/low-risk.svg':(risk==='High Risk'?'./images/high-risk.svg':'./images/mid-risk.svg')} className='risk-icon' alt='low-risk'/>      
                    <p className={risk==='Low Risk'?'low-risk':(risk==='High Risk'?'high-risk':'mid-risk')}>{risk}</p>
                </div>
                <img src='./images/ellipsis.svg' className='risk-icon' alt='ellipsis'/>   
           </div>
        </div>
     );
}
 
export default UserCard;