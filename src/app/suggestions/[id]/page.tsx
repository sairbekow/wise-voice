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
  Container,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai'
import Comment from '@/components/Comment'
import SendIcon from '@mui/icons-material/Send'
import { useLaw } from '@/store/useLaw'
import Loader from '@/ui/Loader'

interface IProps {
  params: {
    id: string
  }
}

const Suggestion = ({ params }: IProps) => {
  const {
    getLaw,
    getAllComments,
    addComment,
    like,
    currentLaw,
    commentsUnderCurrentLaw,
  } = useLaw()
  const [comment, setComment] = useState('')

  useEffect(() => {
    const law = getLaw(+params.id)
    const comments = getAllComments(+params.id)

    console.log(law, comments)
  }, [])

  if (currentLaw === undefined) {
    return (
      <Box display={'flex'} justifyContent={'center'} mt={30}>
        <Loader />
      </Box>
    )
  }

  return (
    <Box sx={{ minWidth: 275, m: 2, my: 5 }}>
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
              {currentLaw?.author?.name}
            </Typography>
          </Box>
          <Typography variant="h6" component="div">
            {currentLaw?.title}
          </Typography>
          <Typography variant="body2">{currentLaw?.content}</Typography>
          <Typography sx={{ mb: 4 }} color="text.secondary">
            {`${new Date(
              Date.parse(currentLaw?.createdAt || '')
            ).toLocaleDateString()}`}
          </Typography>
          <ProgressBar value={40} />
        </CardContent>
        <CardActions>
          <Box>
            <Button
              sx={{ color: currentLaw.liked ? 'green' : 'gray' }}
              onClick={() =>
                like(currentLaw?.author?.id || 0, currentLaw?.id || 0)
              }
            >
              <AiOutlineLike size={30} />
            </Button>
            {currentLaw?.likes}
          </Box>
          <Box>
            <Button sx={{ color: 'gray' }}>
              <AiOutlineEye size={30} />
            </Button>
            {currentLaw?.viewed}
          </Box>
        </CardActions>
      </Card>
      <Box
        display={'flex'}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
        marginTop={2}
      >
        <TextField
          id="outlined-basic"
          label="Ой пикир калтыруу"
          variant="outlined"
          size="small"
          sx={{ width: '100%', marginRight: '20px' }}
          multiline
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => addComment(7, +params.id, comment)}
        >
          Жөнөт
        </Button>
      </Box>
      <List>
        {commentsUnderCurrentLaw.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            authorId={comment.authorId}
            text={comment.text}
            date={'2022-03-25'}
          />
        ))}
      </List>
    </Box>
  )
}

export default Suggestion
