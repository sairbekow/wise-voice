import { Button } from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

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
      <LinkStyled href={'/laws/new'} style={{ textDecoration: 'none' }}>
        Add post
      </LinkStyled>
    </Button>
  )
}

export default CreateButton
