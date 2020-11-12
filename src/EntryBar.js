import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'
import { taskEntryDiv } from './constants.js'


export default class EntryBar extends Component {

    handleChange = (obj) => {
        this.props.handleChangeAddTask(obj)
    }

    render() {
        return (
            <div style={taskEntryDiv}>
                <TextField
                    label="Task to complete"
                    id="name-entry"
                    style={{ width: '80%' }}
                    value={this.props.nameEntry}
                    onChange={(e) => (this.handleChange({ addTaskName: e.target.value }))}
                    required

                />
                <TextField
                    label="Priority"
                    id="priority-entry"
                    style={{ width: '80px', marginLeft: '25px' }}
                    type="number"
                    min={0}
                    max={10}
                    value={this.props.priorityEntry}
                    onChange={(e) => (this.handleChange({ addTaskPriority: e.target.value }))}
                    required
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.handleAddTask}
                    style={{ marginLeft: '25px', marginTop: '15px', }}
                >
                    ADD
                </Button>
            </div>
        )
    }
}
