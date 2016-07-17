import React from 'react'

export class StoriesSideBar extends React.Component {
  render () {
    return (

      <div id="stories-sidebar">
        <ul className="group">
          <li className="periods selected" data-type="periods">
            <span></span>
            Periods
          </li>

          <li className="users" data-type="users">
            <span></span>
            Users
          </li>
          <li className="statuses" data-type="status">
            <span></span>
            Statuses
          </li>
          <li className="tags " data-type="tags">
            <span></span>
            Tags
          </li>
        </ul>

        <div className="delimiter"></div>

        <div id="users_filter">
          <div className="filter-title">Users</div>
          <a title="Clear users" className="clear-filter" href="#"></a>

          <ul>
            <li className='selected' data-login="dv">
              <span className="gravatar">
                <img alt="Dmitriy Vasin" title="Dmitriy Vasin" src="https://secure.gravatar.com/avatar/bb08b17c130407c5a775ff245b8bebff?default=retro&amp;secure=true&amp;size=28" width="28" height="28" />
              </span>

              <span className="login">dv</span>
            </li>

            <li data-login="aas">
              <span className="gravatar">
                <img alt="Alexander Sysuyev" title="Alexander Sysuyev" src="https://secure.gravatar.com/avatar/4ec5b91dda2ccf7fd18ad12c4bd07e66?default=retro&amp;secure=true&amp;size=28" width="28" height="28" />
              </span>

              <span className="login">aas</span>
            </li>

            <li data-login="ado">
              <span className="gravatar">
                <img alt="Artem Dordovskiy" title="Artem Dordovskiy" src="https://secure.gravatar.com/avatar/3cc1c8e5704bd8e4333a474523aab69c?default=retro&amp;secure=true&amp;size=28" width="28" height="28" />
              </span>

              <span className="login">ado</span>
            </li>
          </ul>

        </div>
      </div>
    )
  }
}
