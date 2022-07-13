import { Button, Dialog, DialogContent, DialogTitle, Grid, Modal } from "@mui/material";

export default function SelectItemModal(
  props:{
    open : boolean,
    onClose : ()=>{}
}){
  const {open, onClose} = props;
  
  return (
    <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Selectionner le nombre de produits
        </DialogTitle>
        <DialogContent>
          
        </DialogContent>
        <Grid container justifyContent='center' spacing='20px' paddingY='20px'>
          <Button autoFocus color="primary" variant="contained">Ajouter</Button>
          <Button color="error" variant="outlined">
            Annuler
          </Button>
        </Grid>
      </Dialog>
  )
}