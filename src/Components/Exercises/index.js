import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

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
    exercises, 
    category, 
    onSelect, 
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
                                    <ListItem key={exercise.id} 
                                        button
                                        onClick={() => onSelect( exercise.id )} 
                                    >
                                        <ListItemText primary={ exercise.title } />
                                    </ListItem>
                                )}
                            </List>
                        </Fragment>
                        :null 
                )} 
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography variant="display1">
                    {title}
                </Typography>
                <Typography
                    variant="subheading"
                    style={{marginTop: 20 }}
                >
                    {description}
                </Typography>   
            </Paper>
        </Grid>
    </Grid>