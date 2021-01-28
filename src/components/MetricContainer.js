import MetricCard from './MetricCard';

const MetricContainer = () => {
    return ( 
        <div className="metric-container">
        <MetricCard amount={31454} status={'Ongoing metric'}/>
        <MetricCard amount={2344} status={'Past metric'}/>
        <MetricCard amount={14224} status={'Missed metric'}/>
        <MetricCard amount={635} status={'Failed metric'}/>
        <MetricCard amount={11334} status={'Pending metric'}/>

      </div>
     );
}
 
export default MetricContainer;