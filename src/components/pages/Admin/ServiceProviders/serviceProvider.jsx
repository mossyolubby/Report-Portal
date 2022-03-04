import React from "react";
import "./serviceProvider.css"


export default function ManageServiceProvider(){
    return(
        <div className="bodyProvider">
            <div className="Header">
                <h3 className="headertitle">Manage Service Provider</h3>
                <button className="create">Add New Provider</button>
            </div>
            <hr className="headerline"/>
            <div className="providerTable">
            <table className="Table">
        <tr className="providerTr">
          <th className="providerid">ID</th>
          <th className="providertn">Trading Name</th>
          <th className="providername">Name</th>
          <th className="providerstatus">Status</th>
          <th className="provideredit">Edit Provider</th>
          <th className="providerdelete">Delete Provider</th>
        </tr>
        <tr className="providerTr">
          <td className="providerId2">2212</td>
          <td className="providertn2">9mobile</td>
          <td className="providername2">9mobile communication</td>
          <td className="providerstatus2">enable</td>
          <td className="provideredit2"><button className="editbtn">edit</button></td>
          <td className="providerdelete2"><button className="deletebtn">Delete</button></td>
        </tr>  
        <tr className="providerTr">
          <td className="providerId2">9392</td>
          <td className="providertn2">Glo</td>
          <td className="providername2">Globalcomm</td>
          <td className="providerstatus2">enable</td>
          <td className="provideredit2"><button className="editbtn">edit</button></td>
          <td className="providerdelete2"><button className="deletebtn">Delete</button></td>
        </tr>  
        <tr className="providerTr">
          <td className="providerId2">5900</td>
          <td className="providertn2">MTN</td>
          <td className="providername2">MTN Nigeria</td>
          <td className="providerstatus2">enable</td>
          <td className="provideredit2"><button className="editbtn">edit</button></td>
          <td className="providerdelete2"><button className="deletebtn">Delete</button></td>
        </tr>  
        <tr className="providerTr">
          <td className="providerId2">1950</td>
          <td className="providertn2">Airtel</td>
          <td className="providername2">Airtel Communication</td>
          <td className="providerstatus2">enable</td>
          <td className="provideredit2"><button className="editbtn">edit</button></td>
          <td className="providerdelete2"><button className="deletebtn">Delete</button></td>
        </tr>  
              </table>
            </div>
        </div>
    )
}