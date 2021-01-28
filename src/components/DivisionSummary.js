

const DivisionSummary = () => {
    return ( 
        <div className='division-summary'>
            <div className='flex'>
                <img src='./images/division-summary.svg' className='division-summary_img' alt='division summary icon'/>
                <h3 className='division-summary_title'>Division Summary</h3>
            </div> 

            <div className='flex m12'>
                <img src='./images/phone.svg' className='division-summary_icons' alt='phone'/>
                <h3 className='division-summary_item'>0801 234 5678</h3>
            </div> 

            <div className='flex m6'>
                <img src='./images/email.svg' className='division-summary_icons' alt='email'/>
                <h3 className='division-summary_item'>asbfefr@gmail.com</h3>
            </div> 

            <div className='flex m6'>
                <img src='./images/location.svg' className='division-summary_icons' alt='location'/>
                <h3 className='division-summary_item'>Mojidi, Lagos</h3>
            </div> 

            <div className='flex m6'>
                <img src='./images/journal.svg' className='division-summary_icons' alt='Journal entry'/>
                <h3 className='division-summary_item'>2 Journal entries</h3>
            </div> 

            <div className='flex m6'>
                <img src='./images/fingerprint.svg' className='division-summary_icons' alt='finger print'/>
                <h3 className='division-summary_item'>24 fingerprints enrolled</h3>
            </div> 
      </div>
     );
}
 
export default DivisionSummary;