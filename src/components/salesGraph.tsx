import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SalesData } from '../interfaces/ApiResponse';
import { centsToDollars } from '../helpers/utils';
import dayjs from 'dayjs'; 

interface SalesGraphProps {
  sales: SalesData[];
}

const SalesGraph = ({sales}: SalesGraphProps) => {
  const parseData = (sales: SalesData[]) => {
    return sales.map((item: SalesData)  => {
      return {
        weekEnding: item.weekEnding,
        Retail: centsToDollars(item.retailSales),
        Wholesale: centsToDollars(item.wholesaleSales),
      }
    });
  };

  const parsedData = parseData(sales);

  return (
    <div className="sales-graph component">
      <div>
        <h3>Sales</h3>
      </div>
      <ResponsiveContainer width="100%" height="50%">
        <LineChart data={parsedData}>
          <XAxis
            dataKey="weekEnding"
            tickFormatter={(str) => dayjs(str).format('MMM DD')}
            interval={4}
          />
          <YAxis />
          <Tooltip />
          <Legend iconSize={30}/>
          <Line type="monotone" dataKey="Retail" stroke="#D3D3D3" strokeWidth={3} dot={false}/>
          <Line type="monotone" dataKey="Wholesale" stroke="#4f88e3" strokeWidth={3} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;