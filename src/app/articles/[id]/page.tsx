'use client'
import ProgressBar from '@/ui/ProgressBar'
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  CardActions,
  Button,
  TextField,
  List,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiOutlineDislike, AiOutlineEye } from 'react-icons/ai'
import Loader from '@/ui/Loader'
import { useArticle } from '@/store/useArticle'

interface IProps {
  params: {
    id: string
  }
}

const Article = ({ params }: IProps) => {
  const {
    getArticle,
    fetchArticles,
    likeArticle,
    articles,
    currentArticle,
    loading,
  } = useArticle()
  const [comment, setComment] = useState('')

  useEffect(() => {
    fetchArticles()
    const law = getArticle(+params.id)
    // const comments = getAllComments(+params.id)
    // getVotes(+params.id)

    // console.log(law, comments)
  }, [])

  if (currentArticle === undefined) {
    return (
      <Box display={'flex'} justifyContent={'center'} mt={30}>
        <Loader />
      </Box>
    )
  }

  return (
    <Box sx={{ minWidth: 275 }} m={2}>
      <Card variant="outlined">
        <CardContent>
          <Box
            component="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: 2,
              mb: 2,
            }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {currentArticle?.authorName}
            </Typography>
          </Box>
          <Typography variant="h6" component="div">
            {currentArticle?.title}
          </Typography>
          {/* <Typography variant="body2">{currentArticle?.}</Typography> */}
          {/* <Typography sx={{ mb: 4 }} color="text.secondary">
            {`${new Date(
              Date.parse(currentArticle?.createdAt || '')
            ).toLocaleDateString()}`}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Box display={'flex'} flexDirection={'column'}>
            <Box>
              <Button onClick={() => likeArticle(+params.id, 7, true)}>
                <AiOutlineLike size={30} />
              </Button>
              <Button onClick={() => likeArticle(+params.id, 7, false)}>
                <AiOutlineDislike size={30} />
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  )
}

export default Article
