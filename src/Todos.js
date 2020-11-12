import React, { Component } from 'react'
import { backgroundDiv, landingPagePaperStyling } from './constants.js'
import { Paper, List, Divider } from '@material-ui/core';
import { fetchAllTodos, fetchPostTodo, fetchPutTodo } from './FetchSuite.js';
import TodoItem from './TodoItem.js';
import EntryBar from './EntryBar.js';

export default class Todos extends Component {

    state = {
        todoObjects: [],
        addTaskName: '',
        addTaskPriority: '',
        loading: true,

    }
    componentDidMount = async () => {
        this.refreshList();
    }

    refreshList = async () => {
        const newTodoArray = await fetchAllTodos(this.props.token);
        await this.setState({
            todoObjects: newTodoArray.body,
            loading: false
        })


    }

    handleAddTask = async () => {
        try {
            await this.setState({
                loading: true,
            })
            await fetchPostTodo(this.props.token, {
                name: this.state.addTaskName,
                priority: this.state.addTaskPriority,
            });
            this.refreshList();

            this.setState({
                addTaskName: '',
                addTaskPriority: '',
            })

        } catch (e) {
            alert(e.message)
        }


    }

    handleChangeAddTask = (obj) => {
        this.setState(obj)
    }

    handleToggle = async (id) => {
        await fetchPutTodo(this.props.token, id);
        this.refreshList();
    }


    render() {
        return (
            <div style={backgroundDiv}>
                <Paper style={landingPagePaperStyling}>
                    <EntryBar
                        handleChangeAddTask={this.handleChangeAddTask}
                        handleAddTask={this.handleAddTask}
                        nameEntry={this.state.addTaskName}
                        priorityEntry={this.state.addTaskPriority}
                    />
                    {this.state.loading
                        ?
                        <></>
                        :
                        <List>
                            <Divider />
                            {this.state.todoObjects.map((todo, i) => {
                                return <TodoItem
                                    key={i}
                                    data={todo}
                                    handleToggle={this.handleToggle}
                                    style={{ width: '100%' }}
                                />
                            })}
                        </List>
                    }
                </Paper>
            </div>
        )
    }
}
