import React from 'react';
import Chart from '../../chart/chart';
import FeaturedInfo from '../../featuredInfo/featuredInfo';
import "./home.css";
import { transactionData } from '../../../transactionData';
import WidgetSm from '../../WidgetSmall/widgetSm';
import WidgetLg from '../../WidgetLarge/widgetLg';

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={transactionData} title="transaction Analytics" grid dataKey="totalCount"/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
