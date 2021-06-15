import { IconButton } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const HeaderItem = (props) => {
    return (
        <Link to={props.link?props.link:null} className="HeaderItem">
        <IconButton >
            {props.Icon}
        </IconButton>
            <p>{props.title}</p>
        </Link>
    )
}

export default HeaderItem
