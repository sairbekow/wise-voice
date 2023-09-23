import { Button } from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode'
import Link from 'next/link'
import { ROUTES } from '@/models/routes'

const CreateButton = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<ModeIcon />}
      sx={{ m: 1 }}
    >
      <Link href={'/laws/new'} style={{textDecoration: 'none', color: '#1665c0'}}>  
        Add post
      </Link>
    </Button>
  )
}

export default CreateButton
