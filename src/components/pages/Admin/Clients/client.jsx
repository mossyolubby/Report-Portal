import React from "react";
import "./client.css"


export default function ManageClient(){
    return(
        <div className="bodyProvider">
            <div className="Clientheader">
                <h3 className="headertitle">Manage Service Provider</h3>
                <button className="create">Add New Client</button>
            </div>
            <hr className="headerline"/>
            <div className="providerTable">
            <table className="Table">
        <tr className="providerTr" id="tableheader">
          <th className="providerid">ID</th>
          <th className="providertn">Name</th>
          <th className="providername">Username</th>
          <th className="providerstatus">Status</th>
          <th className="provideredit">API Secret</th>
          <th className="providerdelete">Action</th>
          <th className="providerdelete"></th>
          <th className="providerdelete"></th>
          <th className="providerdelete"></th>
        </tr>
        <tr className="providerTr">
          <td className="providerId2">4ceb3886-1195-4a26-baf4-85c24c842f30</td>
          <td className="providertn2">Goldenrule</td>
          <td className="providername2">Client</td>
          <td className="providername2">enable</td>
          <td className="providerstatus2">8U2CLMHGGUKO1LN215VX</td>
          <td className="provideredit2"><button className="editbtn">Manage Service</button></td>
          <td className="provideredit2"><button className="editbtn">edit</button></td>
          <td className="providerdelete2"><button className="deletebtn">Delete</button></td>
        </tr>  
        <tr className="providerTr">
        <td className="providerId2">4ceb3886-1195-4a26-baf4-85c24c842f30</td>
          <td className="providertn2">Goldenrule</td>
          <td className="providername2">Client</td>
          <td className="providername2">enable</td>
          <td className="providerstatus2">8U2CLMHGGUKO1LN215VX</td>
          <td className="provideredit2"><button className="editbtn">Manage Service</button></td>
          <td className="provideredit2"><button className="editbtn">edit</button></td>
          <td className="providerdelete2"><button className="deletebtn">Delete</button></td>
        </tr>  
        <tr className="providerTr">
        <td className="providerId2">4ceb3886-1195-4a26-baf4-85c24c842f30</td>
          <td className="providertn2">Goldenrule</td>
          <td className="providername2">Client</td>
          <td className="providername2">enable</td>
          <td className="providerstatus2">8U2CLMHGGUKO1LN215VX</td>
          <td className="provideredit2"><button className="editbtn">Manage Service</button></td>
          <td className="provideredit2"><button className="editbtn">edit</button></td>
          <td className="providerdelete2"><button className="deletebtn">Delete</button></td>
        </tr>  
        <tr className="providerTr">
        <td className="providerId2">4ceb3886-1195-4a26-baf4-85c24c842f30</td>
          <td className="providertn2">Goldenrule</td>
          <td className="providername2">Client</td>
          <td className="providername2">enable</td>
          <td className="providerstatus2">8U2CLMHGGUKO1LN215VX</td>
          <td className="provideredit2"><button className="editbtn">Manage Service</button></td>
          <td className="provideredit2"><button className="editbtn">edit</button></td>
          <td className="providerdelete2"><button className="deletebtn">Delete</button></td>
        </tr>  
              </table>
            </div>
        </div>
    )
}