import UserCard from "./UserCard"

const UserTable = () => {
    return (
        <div className='user-table'>
            
        <div className='user-card header'>
              
            <input type='checkbox'/>   
            <p>NAME</p>
            <p className='user-card_location'>LOCATION</p>   
            <p>STATUS</p>
            <p>ENTRIES</p>
            <p className='risk-heading'>RISK</p>
             
        </div>

            <UserCard name={'Courtney Henry'} state={'Lagos state'} address={'775 Rolling Green Rd.'}
              status={'No Issues'}  entryNum = {'19 Unique Entries'} entryType = {'Homogenous'} risk = {'Low Risk'}
            />

            <UserCard name={'Darrell Steward'} state={'Lagos state'} address={'7529 E. Pecan St.'}
              status={'2 Issues found'}  entryNum = {'10 Unique Entries'} entryType = {'Heterogenous'} risk = {'Mid Risk'}
            />
            
            <UserCard name={'Cody Fisher'} state={'Lagos state'} address={'3605 Parker Rd.'}
              status={'No Issues'}  entryNum = {'8 Unique Entries'} entryType = {'Homogenous'} risk = {'Mid Risk'}
            />

            <UserCard name={'Bessie Cooper'} state={'Lagos state'} address={'775 Rolling Green Rd.'}
              status={'1 Issue found'}  entryNum = {'12 Unique Entries'} entryType = {'Heterogenous'} risk = {'High Risk'}
            />

            <UserCard name={'Annette Black'} state={'Lagos state'} address={'8080 Railroad St.'}
              status={'No Issues'}  entryNum = {'13 Unique Entries'} entryType = {'Heterogenous'} risk = {'Low Risk'}
            />

            <UserCard name={'Jenny Wilson'} state={'Lagos state'} address={'8080 Railroad St.'}
              status={'5 Issues found'}  entryNum = {'18 Unique Entries'} entryType = {'Homogenous'} risk = {'High Risk'}
            />

            <UserCard name={'Darlene Robertson'} state={'Lagos state'} address={'3890 Poplar Dr.'}
              status={'2 Issues found'}  entryNum = {'6 Unique Entries'} entryType = {'Homogenous'} risk = {'Mid Risk'}
            />

            <UserCard name={'Ralph Edwards'} state={'Lagos state'} address={'8558 Green Rd.'}
              status={'No Issues'}  entryNum = {'14 Unique Entries'} entryType = {'Homogenous'} risk = {'Low Risk'}
            />
        </div>
      );
}
 
export default UserTable;