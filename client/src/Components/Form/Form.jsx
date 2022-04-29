import React, { useState } from 'react'
import useStyles from  './styles'
import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { createPost } from '../../Store/actions/posts'



const Form = () => {

    const [postData, setPostData ] = useState({    creator: '', title: '', tags: '', selectedFile: ''})
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createPost(postData))
    }



    const clear = () => {

    }

    const classes = useStyles()




    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`{$classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Crear publicacion</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Autor"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}>
                </TextField>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Titulo"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}>
                </TextField>
                <TextField
                    name="message"
                    variant="outlined"
                    label="Mensaje"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}>
                </TextField>
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}>
                </TextField>
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Agregar</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Limpiar</Button>
            </form>
        </Paper>
    )
}

export default Form

