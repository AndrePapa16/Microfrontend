import * as React from 'react';
import { Input, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { Search } from "lucide-react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Register from "../routes/Register"; // Importiamo il componente di registrazione
import "../index.css";

interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
}

const Nav = ({ search, setSearch }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [user, setUser] = React.useState<any>(JSON.parse(localStorage.getItem("user") || "null"));
  const [openRegister, setOpenRegister] = React.useState(false);

  // Apertura menu per l'icona dell'utente
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Chiusura del menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Funzione per il logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    handleMenuClose();
  };

  // Funzione per il login dell'utente
  const handleLogin = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setOpenRegister(false);
  };

  return (
    <nav className="bg-blue-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My Remote Portal</h1>

      <div className="flex items-center gap-2">
        <Input
          className="p-2 rounded"
          placeholder="Cerca..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
        <Button><Search size={20} /></Button>

        {user ? (
          <IconButton onClick={handleMenuClick}>
            <AccountCircleIcon />
          </IconButton>
        ) : (
          <Button variant="contained" color="primary" onClick={() => setOpenRegister(true)}>
            Login
          </Button>
        )}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>

      {/* Mostriamo la modale di login/registrazione quando necessario */}
      <Register open={openRegister} onClose={() => setOpenRegister(false)} onLogin={handleLogin} />
    </nav>
  );
};

export default Nav;
