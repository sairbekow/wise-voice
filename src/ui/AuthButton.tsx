import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import { Button } from '@mui/material'

const AuthButton = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<PersonIcon />}
      sx={{ m: 1 }}
    >
      Катталуу
    </Button>
  )
}

export default AuthButton
