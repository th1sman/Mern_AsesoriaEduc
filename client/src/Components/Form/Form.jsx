import React, { useState } from 'react'
import useStyles from  './styles'

import { TextField, Button, Typography, Paper } from '@material-ui/core'



const Form = () => {

    const [postData, setPostData ] = useState({    creator: '', title: '', tags: '', selectedFile: ''})

    const handleSubmit = () => {

    }

    const classes = useStyles()

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}>

                </TextField>
            </form>
        </Paper>
    )
}

export default Form

