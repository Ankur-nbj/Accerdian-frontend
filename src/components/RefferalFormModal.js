import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import  styled  from '@emotion/styled';

const ModalContent = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const ReferralFormModal = ({ open, handleClose }) => {
  const [form, setForm] = useState({
    referrer_name: '',
    referrer_email: '',
    referee_name: '',
    referee_email: '',
    course_interested: ''
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://your-backend-url.com/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSnackbarMessage('Referral submitted successfully!');
        setSnackbarOpen(true);
        setForm({
          referrer_name: '',
          referrer_email: '',
          referee_name: '',
          referee_email: '',
          course_interested: ''
        });
      } else {
        setSnackbarMessage('Failed to submit referral');
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage('An error occurred');
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          <Typography gutterBottom sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Referral Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Referrer Name"
              name="referrer_name"
              value={form.referrer_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Referrer Email"
              name="referrer_email"
              value={form.referrer_email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Referee Name"
              name="referee_name"
              value={form.referee_name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Referee Email"
              name="referee_email"
              value={form.referee_email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Course Interested"
              name="course_interested"
              value={form.course_interested}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" color="primary" width="50%">
              Submit
            </Button>
          </form>
        </ModalContent>
      </Modal>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarMessage.includes('success') ? 'success' : 'error'}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ReferralFormModal;
