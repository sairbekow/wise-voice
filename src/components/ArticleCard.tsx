import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import { AiOutlineEye } from 'react-icons/ai'
import { IArticle } from '@/models'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export default function ArticleCard(props: IArticle) {
  const { t } = useTranslation()
  return (
    <Box sx={{ minWidth: 275, m: 2, my: 5 }}>
      <Card variant="outlined">
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
              {props?.authorName}
            </Typography>
          </Box>
          <Typography variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography sx={{ mb: 4 }} color="text.secondary">
            {`${new Date().toLocaleDateString()}`}
          </Typography>
          <Box display={'flex'} gap={20}>
            <Box sx={{ mt: 3 }}>
              <AiOutlineEye size={30} />
              <Typography component="div">
                {props.id + Math.trunc(Math.random() * 50 + 1)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link
              href={props.linkToArticle}
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
