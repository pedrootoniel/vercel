import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Div, Paragrafo, Header } from './styles'

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Div>
        <Header>
          <Paragrafo>
            SITE DE TESTE
        </Paragrafo
          ></Header>
        <Button style={{ color: 'red', fontSize: '20px' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Abrir Menu
      </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Div>
    </Fragment>
  );
}