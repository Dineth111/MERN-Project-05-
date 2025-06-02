import { Typography, Grid, Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, isEdit, selectedUser }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAddUser = () => {
        if (isEdit) {
            updateUser({ id, name });
        } else {
            addUser({ id, name });
        }
        setIsSubmitted(true);
    };

    useEffect(() => {
        if (isSubmitted) {
            setId(0);
            setName('');
            setIsSubmitted(false);
        }
    }, [isSubmitted]);

    useEffect(() => {
        if (isEdit && selectedUser.id) {
            setId(selectedUser.id);
            setName(selectedUser.name);
        }
    }, [isEdit, selectedUser]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '600px',
                margin: 'auto',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000', textAlign: 'center' }}>
                    User Form
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="ID"
                    type="number"
                    id="id"
                    name="id"
                    variant="outlined"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Name"
                    type="text"
                    id="name"
                    name="name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '10px',
                        fontSize: '16px',
                        '&:hover': {
                            backgroundColor: '#45a049',
                        },
                    }}
                    onClick={handleAddUser}
                >
                    {isEdit ? 'Update' : 'Add'}
                </Button>
            </Grid>
        </Grid>
    );
}

export default UserForm;