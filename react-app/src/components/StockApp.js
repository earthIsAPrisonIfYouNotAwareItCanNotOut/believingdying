import React, { Component } from 'react'
import styled from 'styled-components'
import Card, { CardContent } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'

const styles = {
  card: {
    minWidth: 275
  }
}

class Stock extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <h1>123</h1>
            <h2>345</h2>
            <h2>345</h2>
            <h2>345</h2>
            <h2>345</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h1>123</h1>
            <h2>345</h2>
            <h2>345</h2>
            <h2>345</h2>
            <h2>345</h2>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Stock)
