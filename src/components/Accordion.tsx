import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, TextField, Button } from '@mui/material'
import { useDocument } from '@/store/useDocment'
import { useTranslation } from 'next-i18next'

interface IProps {
  userId: number
  documentId: number
}

export default function BasicAccordion({ userId, documentId }: IProps) {
  const { t } = useTranslation()
  const { addInitiator } = useDocument()
  const [email, setEmail] = React.useState('')

  const handleChange = () => {
    addInitiator(email, documentId, userId)
  }

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{t('become-an-initiator')}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          minWidth={400}
          rowGap={2}
        >
          <TextField
            id="outlined-controlled"
            label="email"
            fullWidth
            value={email}
            onChange={(event: any) => setEmail(event.target.value)}
          />
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={handleChange}
          >
            {t('send')}
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
