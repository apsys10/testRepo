import React from 'react'
import Wrap from '../../hoc/wrap';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'


const layout = (props) =>
{return <Wrap>
  <Toolbar />
    <main className = {classes.Content}>
        {props.children}
    </main>
    </Wrap>
}
export default layout;