import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import ProgressBar from '../ui/ProgressBar'
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai'
import { ILaw } from '@/models'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

const authors = [
  'Нурсултан Абдылдаев',
  'Автандил Нурбеков',
  'Бектур Алтынбеков',
  'Нуркыз Султанова',
  'Гулбарчын Саматова',
  'Акыл Бекназар',
]

export default function LawCard(props: ILaw) {
  const { t } = useTranslation()
  return (
    <Box sx={{ minWidth: 275, m: 2, my: 5 }}>
      <Card variant="outlined" sx={{ borderRadius: 5, p: 2 }}>
        <CardContent>
          <Box
            component="div"
            sx={{ display: 'flex', alignItems: 'center', columnGap: 2, mb: 2 }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {authors[Math.trunc(Math.random() * 5)]}
            </Typography>
          </Box>
          <Typography variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2">{props.content}</Typography>
          <Typography sx={{ mb: 5, mt: 5 }} color="text.secondary">
            {`${new Date().toLocaleDateString()}`}
          </Typography>
          <ProgressBar value={Math.random() * 100} />
          <Box display={'flex'} gap={20}>
            <Box
              sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}
              color={props.liked ? 'red' : 'gray'}
            >
              <AiOutlineLike size={30} /> {props.likes}
            </Box>
            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <AiOutlineEye size={30} /> {props.viewed}
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link
              href={`/laws/${props.id}`}
              style={{ textDecoration: 'none', color: '#1665c0' }}
            >
              {t('learn-more')}
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
