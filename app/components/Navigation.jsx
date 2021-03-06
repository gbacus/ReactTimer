var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = (props) => {
  return(
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>
            React Timer App
          </li>
          <li>
            <IndexLink to='/' activeClassName='active-link'>Timer</IndexLink>
          </li>
          <li>
            <Link to='/countdown' activeClassName='active-link'>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className='top-bar-right'>
        <ul className='menu'>
          <li className='menu-text'>
            Built using <a href="https://facebook.github.io/react/" target="_blank">React</a> and <a href="http://foundation.zurb.com/" target="_blank">Foundation</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Navigation;