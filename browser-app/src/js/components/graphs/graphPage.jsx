import React, { Component } from 'react'

export class graphPage extends Component {
  render() {
    return (
      <table id="issuetable" cellSpacing="0" cellPadding="3">
        <thead>
          <tr className="rowHeader">
            <th className="colHeader" colSpan="5">Timesheet</th>
            <th ><span>Fri<br/>08/Jul</span></th>
            <th className="nonBusinessDay"><span>Sat<br/>09/Jul</span></th>
            <th className="nonBusinessDay"><span>Sun<br/>10/Jul</span></th>
            <th ><span>Mon<br/>11/Jul</span></th>
            <th ><span>Tue<br/>12/Jul</span></th>
            <th ><span>Wed<br/>13/Jul</span></th>
            <th className="toDay"><span>Thu<br/>14/Jul</span></th>
            <th><br/>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr className="rowNormal">
            <td className="nav issuetype">
              <span className=""><img width="16" height="16" src="#" /></span>
            </td>

            <td className="nav issuekey">
              <span className="">LA-1339</span>
            </td>

            <td className="nav summary" colSpan="2" width="100%">
              <span className="">Loyalty App Bank Details need to be configurable</span>
            </td>

            <td className="nav priority">
              <span className=""><img width="16" height="16" alt="Major" src="#" /></span>
            </td>

            <td >
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="nonBusinessDay">
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="nonBusinessDay">
              <span className="fa fa-plus hidden"></span>
            </td>

            <td >
              <span className="fa fa-plus hidden"></span>
            </td>

            <td >
              <span className="fa fa-plus hidden"></span>
            </td>

            <td >
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="toDay">
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="total">2h</td>
          </tr>

          <tr className="rowAlternate">
            <td className="nav issuetype">
              <span href="#" className="">
                <img width="16" height="16" title="Issue type for a user story." alt="Story" src="#" />
              </span>
            </td>

            <td className="nav issuekey">
              <span href="#" title="" className="">LA-1392</span>
            </td>

            <td className="nav summary" colSpan="2" width="100%">
              <span href="#" title="" className="">A unique code will be added to all accounts</span>
            </td>

            <td className="nav priority">
              <span href="#" className="">
                <img width="16" height="16" alt="Critical" src="#" />
              </span>
            </td>

            <td >
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="nonBusinessDay">
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="nonBusinessDay">
              <span className="fa fa-plus hidden"></span>
            </td>

            <td >
              <span className="fa fa-plus hidden"></span>
            </td>

            <td >
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="editWorklogPopup">
              3h
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="toDay">
              <span className="fa fa-plus hidden"></span>
            </td>

            <td className="total">
              3h
            </td>
          </tr>

          <tr className="rowFooter">
            <td colSpan="5" className="nav total">Total:</td>
            <td className="total">8h</td>
            <td className="total"></td>
            <td className="total"></td>
            <td className="total">8h</td>
            <td className="total">8h</td>
            <td className="total">8h</td>
            <td className="total">2h</td>
            <td className="total">64h</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
