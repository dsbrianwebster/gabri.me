// @flow
import React from 'react'
import cxs from 'cxs'
import { logEvent } from '../utils/analytics'
import icon from '../../public/img/twitter-btn.svg'

const s = {
  wrap: cxs({
    textAlign: 'center',
  }),
  btn: cxs({
    fontSize: 11,
    position: 'relative',
    height: '20px',
    boxSizing: 'border-box',
    padding: '1px 8px 1px 6px',
    backgroundColor: '#1b95e0',
    color: '#fff',
    borderRadius: '3px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'inline-block',
    verticalAlign: -1,
    border: 'none',
    ':hover': {
      border: 'none',
    },
  }),
  label: cxs({
    display: 'inline-block',
    verticalAlign: 'top',
    marginLeft: '3px',
    whiteSpace: 'nowrap',
  }),
  icon: cxs({
    position: 'relative',
    top: '2px',
    display: 'inline-block',
    width: '14px',
    height: '14px',
    paddingRight: 2,
  }),
}

export default ({ via, title, url }) =>
  <div className={s.wrap}>
    <a
      className={s.btn}
      onClick={() => logEvent('Tweet', title)}
      href={`https://twitter.com/share?url=${url}&via=${via.slice(
        1
      )}&text=${title}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className={s.icon}>
        <img src={icon} alt="" />
      </i>
      <span className={s.label}>Tweet</span>
    </a>
  </div>
