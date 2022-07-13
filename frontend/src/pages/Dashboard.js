import React from  'react';
import '../styles/Dashboard.css'

const Dashboard =(props)=>{
    return(
        <div id='Dashboard'>
            <header id="Dashboard-header" className={(props.active?'active':'inactive')}>
                <iframe title="Dashboard" src="https://app.powerbi.com/view?r=eyJrIjoiYWUyZTU2OTItNTk5NC00NjVkLWFkNTAtZTI5ODQyZjNhODg0IiwidCI6IjY5NjVkNDMyLWU2OGItNDExMy1iMTI1LTdiNjE1ZGU2OGRlYiJ9"/>
            </header>
        </div>
    );
}

export default Dashboard;