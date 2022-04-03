
import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboards = () => {
    const [dataAnalysis, setDataAnalysis]=useState([])
console.log(dataAnalysis);
    useEffect(()=>{
        fetch('dataAnalysis.json')
        .then(res=>res.json())
        .then(data=>setDataAnalysis(data))
    },[])

    return (
        <div className='container my-5 mx-auto text-center'>
            <div>
                <h3>inventsment  vs revenue</h3>                               
                <AreaChart width={1000} height={250} data={dataAnalysis}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip/>
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
            <div>
                <h3 className='mt-5'>Month wise sell</h3>
                <PieChart width={1100} height={250}>
                <Pie data={dataAnalysis} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={dataAnalysis} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                <Tooltip/>
                </PieChart>
            </div>
            
        </div>
    );
};

export default Dashboards;