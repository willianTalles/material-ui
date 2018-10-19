import React, { Fragment, Component } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core'
import AddIcon  from '@material-ui/icons/Add'

export default class extends Component {
    state = {
        open: false
    }

    handleToggle = () =>{
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        const { open } = this.state

        return <Fragment>
            <Button onClick={this.handleToggle} color='inherit' mini>
                <AddIcon/>  Add exercise
            </Button>
            <Dialog
            open={ open }
            onClose={this.handleToggle}
            >
                <DialogTitle id="form-dialog-title">
                    Create a new exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <form>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
}
    