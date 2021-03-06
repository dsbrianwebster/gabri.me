// @flow
import React from 'react'
import { css } from 'emotion'

export default ({ author }) => (
  <div>
    <small
      className={css`
        font-size: 0.5rem;
        opacity: 0.3;
      `}
    >
      {author} © {new Date().getFullYear()}
    </small>
  </div>
)
