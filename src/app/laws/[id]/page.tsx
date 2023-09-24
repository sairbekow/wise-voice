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
import Comment from '@/components/Comment'
import SendIcon from '@mui/icons-material/Send'
import Loader from '@/ui/Loader'
import { useDocument } from '@/store/useDocment'
import BasicAccordion from '@/components/Accordion'

interface IProps {
  params: {
    id: string
  }
}

const Law = ({ params }: IProps) => {
  const {
    getDocument,
    getAllComments,
    getVotes,
    addComment,
    like,
    voteForDocument,
    votes,
    currentDocument,
    commentsUnderCurrentDocument,
  } = useDocument()
  const [comment, setComment] = useState('')

  useEffect(() => {
    const law = getDocument(+params.id)
    const comments = getAllComments(+params.id)
    getVotes(+params.id)

    console.log(law, comments)
  }, [])

  if (currentDocument === undefined) {
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
              {currentDocument?.author?.name}
            </Typography>
          </Box>
          <Typography variant="h6" component="div">
            {currentDocument?.titleKg}
          </Typography>
          <Typography variant="body2">{currentDocument?.contentKg}</Typography>
          <Typography sx={{ mb: 4 }} color="text.secondary">
            {`${new Date(
              Date.parse(currentDocument?.createdAt || '')
            ).toLocaleDateString()}`}
          </Typography>
          {(currentDocument.isReadyForVote ||
            (currentDocument.initiators &&
              currentDocument.initiators.length > 9)) && (
            <>
              <ProgressBar value={(votes * 100) / 10000} /> <span>{votes}/10000</span>
            </>
          )}
        </CardContent>
        <CardActions>
          <Box display={'flex'} flexDirection={'column'}>
            <Box>
              {(currentDocument.isReadyForVote ||
                (currentDocument.initiators &&
                  currentDocument.initiators.length > 9)) && (
                <>
                  <Button
                    onClick={() =>
                      voteForDocument(
                        +params.id,
                        currentDocument.authorId,
                        true
                      )
                    }
                  >
                    <AiOutlineLike size={30} />
                  </Button>
                  <Button
                    onClick={() =>
                      voteForDocument(
                        +params.id,
                        currentDocument.authorId,
                        false
                      )
                    }
                  >
                    <AiOutlineDislike size={30} />
                  </Button>
                </>
              )}
            </Box>
            <Box>
              <Button sx={{ color: 'gray' }}>
                <AiOutlineEye size={30} />
              </Button>
              {currentDocument?.viewed}
            </Box>
            <Box m={2}>
              <span>Число инициаторов: </span>
              {currentDocument?.initiators?.length}
            </Box>
            <Box>
              <BasicAccordion
                documentId={currentDocument.id}
                userId={currentDocument.authorId}
              />
            </Box>
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
        {commentsUnderCurrentDocument.map((comment, id) => (
          <Comment
            key={id}
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

export default Law
