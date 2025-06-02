import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Button } from '@mui/material';

const UsersTable = ({ users, handleEditUser, handleDeleteUser }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <Button
                  sx={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px',
                    fontSize: '16px',
                    '&:hover': { backgroundColor: '#45a049' },
                    marginRight: '10px'
                  }}
                  onClick={() => handleEditUser(row)}
                >
                  Edit
                </Button>
                <Button
                  sx={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    padding: '10px',
                    fontSize: '16px',
                    '&:hover': { backgroundColor: '#d32f2f' }
                  }}
                  onClick={() => handleDeleteUser(row.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;