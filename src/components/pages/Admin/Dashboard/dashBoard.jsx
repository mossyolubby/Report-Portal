import React from 'react';
import "./dashBoard.css";
import { transactionData } from '../../../../adminTransactionData';
import AdminFeatures from '../../../AdminFeatures/adminfeatures';
import AdminChart from '../../../AdminFeatures/AdminChart/adminChat';
import AdminWidgetLarge from '../AdminWidgetLarge/adminWidgetLarge';
import AdminWidgetSmall from '../AdminWidgetSmall/adminWidgetSmall';

export default function AdminDashboard() {
  return (
    <div className="home">
      <AdminFeatures />
      <AdminChart data={transactionData} title="transaction Analytics" grid dataKey="totalCount"/>
      <div className="homeWidgets">
        <AdminWidgetSmall/>
        <AdminWidgetLarge />
        
      </div>
    </div>
  )
}