import React, { useState } from "react";
import { Button, Modal, TextField, Box, Typography } from "@mui/material";

interface RegisterProps {
  open: boolean;
  onClose: () => void;
  onLogin: (userData: any) => void;
}

const Register = ({ open, onClose, onLogin }: RegisterProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      onLogin(formData);
      onClose();
    } else {
      setRegistrationSuccess(true);
      setIsLogin(true);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {isLogin ? "Accedi" : "Registrati"}
        </Typography>

        {registrationSuccess && (
          <Typography color="green" variant="body2" sx={{ mb: 2 }}>
            Registrazione completata! Ora accedi.
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <TextField
              fullWidth
              label="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
            />
          )}
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            {isLogin ? "Accedi" : "Registrati"}
          </Button>
        </form>

        <Button 
          onClick={() => {
            setIsLogin(!isLogin);
            setRegistrationSuccess(false);
          }} 
          sx={{ mt: 2 }} 
          fullWidth
        >
          {isLogin ? "Non hai un account? Registrati" : "Hai già un account? Accedi"}
        </Button>
      </Box>
    </Modal>
  );
};

export default Register;
