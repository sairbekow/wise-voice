'use client'
import ArticleCard from '@/components/ArticleCard'
import { useArticle } from '@/store/useArticle'
import Loader from '@/ui/Loader'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'

const Articles = () => {
  const { loading, articles, fetchArticles } = useArticle()

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div>
      {loading ? (
        <Box display={'flex'} justifyContent={'center'} mt={30}>
          <Loader />
        </Box>
      ) : (
        <div>
          {articles.map((item) => (
            <ArticleCard {...item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Articles
