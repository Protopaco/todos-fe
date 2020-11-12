import React, { Component } from 'react'
import { ListItem, ListItemText, Checkbox, Divider } from '@material-ui/core';

export default class TodoItem extends Component {
    render() {
        return (
            <>
                <ListItem
                    key={this.props.key}
                    variation="contained"
                    style={{ width: '600px' }}
                >
                    <ListItemText
                        id={`priority ${this.props.data.priority}`}
                        primary={this.props.data.priority}
                    />
                    <ListItemText
                        id={this.props.key}
                        primary={this.props.data.name}
                    />
                    <Checkbox
                        edge="end"
                        onChange={() => this.props.handleToggle(this.props.data.id)}
                        checked={this.props.data.completed}
                    />
                </ListItem >
                <Divider />
            </>
        )
    }
}
