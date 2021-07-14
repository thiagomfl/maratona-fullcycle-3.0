import React from 'react'
import Link from 'next/link'
import StoreIcon from '@material-ui/icons/Store'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'

const Navbar: React.FunctionalComponent = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Link href={"/"} as {`/`} passHref>
          <Button 
            color="inherit"
            startIcon={<StoreIcon />}
            component={}
          >
            <Typography variant="h6">Code Store</Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
