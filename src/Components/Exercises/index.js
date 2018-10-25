import React, { Fragment } from 'react';

import { 
    Grid, 
    Paper, 
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemSecondaryAction, 
    IconButton} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons'

import Form from './Form'

const styles = {
    Paper: {
        padding: 20, 
        marginTop: 10, 
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    } 
}

export default ({
    muscles, 
    exercises,
    editMode, 
    category, 
    onSelect,
    onSelectEdit,
    onDelete,
    onEdit,
    exercise, 
    exercise:{ 
        id, 
        title = 'Welcome', 
        description = 'Please select an exercise from the list on the left.'
    } 
}) =>
    <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {/* O exercise é um array que na primeira posição tem o nome do musculo e na segunda um objeto. 
                [group, exercises] indexa a primeira posição como group e a segunda como exercises*/}
                { exercises.map( ( [ group, exercises ] ) => 
                    !category || category === group
                        ?<Fragment key={ group }>
                            <Typography
                                variant="headline"
                                style={{ textTransform: 'capitalize' }}
                            >
                                { group }
                            </Typography>
                            <List component="ul">
                                {exercises.map(exercise =>
                                    <ListItem 
                                        key={exercise.id} 
                                        button
                                        onClick={() => onSelect( exercise.id )} 
                                    >   
                                        <ListItemText primary={ exercise.title } />
                                        <ListItemSecondaryAction>
                                            <IconButton onClick={ () => onSelectEdit( exercise.id ) } color='secondary'>
                                                <Edit/>
                                            </IconButton>
                                            <IconButton onClick={ () => onDelete( exercise.id ) } color='secondary'>
                                                <Delete/>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        :null 
                )} 
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                {editMode
                ?<Form
                    exercise={ exercise }
                    muscles={ muscles }
                    onSubmit= { onEdit }
                />
                :<Fragment>
                    <Typography variant="display1">
                        {title}
                    </Typography>
                    <Typography
                        variant="subheading"
                        style={{marginTop: 20 }}
                    >
                        {description}
                    </Typography>
                </Fragment>
                }   
            </Paper>
        </Grid>
    </Grid>