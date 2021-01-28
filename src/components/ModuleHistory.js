const ModuleHistory = () => {
    return ( 
        <div className='module-history'>
            <div className='flex'>
                <img src='./images/module-history.svg' className='division-summary_img' alt='module history icon'/>
                <h3 className='division-summary_title'>Module History</h3>
            </div> 

            <div className='module-history-card'>
                <p className='module-history-item'>Searched "Journal Entries" on Division module</p>
                <p className='module-history-date'>22:10 15/09/2020<span>Web</span></p>
            </div>

            <div className='module-history-card'>
                <p className='module-history-item'>Searched "Fingerprint record" on Division module</p>
                <p className='module-history-date'>22:10 15/09/2020<span>Web</span></p>
            </div>

            <div className='module-history-card'>
                <p className='module-history-item'>Searched "Journal Entries" on Division module</p>
                <p className='module-history-date'>22:10 15/09/2020<span>Web</span></p>
            </div>
        </div>
     );
}
 
export default ModuleHistory;