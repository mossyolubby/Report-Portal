import React from 'react';
import "./adminWidgetSmall.css"

export default function adminWidgetSmall() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Transaction Status</span>
      <ul classNAme="widgetSmList">
          <li className="WidgetSmItems">
              <div className="widgetSmSuccess">Successful
              <span className="widgetSmSucessCount">234,457</span></div>
          </li>
          <li className="WidgetSmItems">
              <div className="widgetSmPending">Pending
              <span className="widgetPendingCount">234,457</span></div>
          </li>
          <li className="WidgetSmItems">
              <div className="widgetSmFailed">Failed
              <span className="widgetSmFailedCount">234,457</span></div>
          </li>
      </ul>
    </div>
  )
}
