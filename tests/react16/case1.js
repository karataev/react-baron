// @flow

import React, { Component } from 'react'
import Baron from 'react-baron'

var i = 0

export default class Case1 extends Component<{}> {
  componentDidMount() {
    setInterval(() => {
      i++
      this.forceUpdate()
    }, 3000)
  }

  render() {
    let title = 'title'

    if (i % 2 === 0) {
      title = (
        <Baron>
          111
        </Baron>
      )
    }

    return (
      <Baron>
        {title}
        <div style={{ padding: '100px', height: '150px' }}>
          Baron is a title of nobility. In the kingdom of England, the medieval Latin word baro, baronis was used originally to denote a tenant-in-chief of the early Norman kings who held his lands by the feudal tenure of "barony" (in Latin per baroniam), and who was entitled to attend the Great Council which by the 13th century had developed into the Parliament of England.

          The title was quite common in most European countries often in a slightly modified form. In Italian, the word used was Barone. The corresponding title in the Holy Roman Empire was Freiherr.
        </div>
      </Baron>
    )
  }
}
