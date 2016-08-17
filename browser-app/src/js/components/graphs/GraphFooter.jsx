import React, { Component } from 'react'

export class GraphFooter extends Component {

  render() {
    return (
      <tfoot>
        <tr>
          <td colSpan='3' className='total'>Total:</td>
          <td>8h</td>
          <td></td>
          <td></td>
          <td>8h</td>
          <td>8h</td>
          <td>8h</td>
          <td>2h</td>
          <td>64h</td>
        </tr>
      </tfoot>
    )
  }
}
