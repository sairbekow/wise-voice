import { Button } from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Routes } from '@/models/routes'

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`

const CreateButton = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<ModeIcon />}
      sx={{ m: 1 }}
    >
      <LinkStyled href={Routes.SUGGESTIONS_CREATE} style={{textDecoration: 'none', color: '#1665c0'}}>  
        Add post
      </LinkStyled>
    </Button>
  )
}

export default CreateButton
