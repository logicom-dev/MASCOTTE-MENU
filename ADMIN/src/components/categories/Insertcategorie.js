import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "../Navbarre";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

export default function Commandes() {
  const [commandes, setCommandes] = useState([]);
  const [selectedCommande, setSelectedCommande] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/postCommande");
        setCommandes(response.data);
        console.log("qqqqq", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (comData) => {
    setSelectedCommande(comData);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedCommande(null);
    setShowPopup(false);
  };

  return (
    <>
      <Menu />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Nom</TableCell>
            <TableCell>Numéro de chambre</TableCell>
            <TableCell>Numéro de téléphone</TableCell>
            <TableCell>Note</TableCell>
            <TableCell>Prix TTC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {commandes.map((commande) => (
            <TableRow
              key={commande.id_cmd}
              onClick={() => handleRowClick(commande.com_data)}
            >
              <TableCell>{commande.id_cmd}</TableCell>
              <TableCell>{commande.com_data.email}</TableCell>
              <TableCell>{commande.com_data.nom}</TableCell>
              <TableCell>{commande.com_data.numch}</TableCell>
              <TableCell>{commande.com_data.numtel}</TableCell>
              <TableCell>{commande.com_data.note}</TableCell>
              <TableCell>{commande.com_data.prixttc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={showPopup}
        onClose={closePopup}
        aria-labelledby="modal-title"
        aria-describedby="modal-body-desc"
      >
        <DialogTitle id="modal-title">
          Commande Details
        </DialogTitle>
        <DialogContent>
          {selectedCommande && (
            <>
              <Typography variant="subtitle1">
                <strong>Email:</strong> {selectedCommande.email}
              </Typography>
              <Typography variant="subtitle1">
                <strong>Nom:</strong> {selectedCommande.nom}
              </Typography>
              {/* Add more fields as needed */}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closePopup}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
