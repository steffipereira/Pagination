import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Box,
  Button,
  Heading,
  Text,
  Flex
} from 'rebass'

const postPerPage = 10
export const Post = () => {
  const [posts, setPosts] = useState([])
  const [paginatedPost, setPaginatedPost] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data)
        setPaginatedPost(response.data.slice(0, postPerPage))
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const totalPages = posts ? Math.round(posts.length / postPerPage) : 0
  if(totalPages === 1) return null

  const setNewPage = (selectedPageNo) => {
    setCurrentPage(selectedPageNo)
    const startIndex = (selectedPageNo - 1) * postPerPage
    setPaginatedPost(posts.slice(startIndex, (startIndex+postPerPage)))
  }

  return (
    <Flex flexWrap="wrap" mx={2}>
      <Box px={2} py={2} width={1}>
        <Heading color="grey" textAlign="center">All Post</Heading>
      </Box>
      {paginatedPost && paginatedPost.map(post => (
        <Box px={2} py={2} width={1 / 4} key={post.id}>
          <Text p={1} color="dimgray">{post.id}</Text>
          <Heading color="darkslateblue">
            {post.title}
          </Heading>
          <Text p={1} color="dimgray">{post.body}</Text>
        </Box>
      ))}
      <Box px={2} py={2} width={1}>
        {Array(totalPages).fill().map((_, index) => (
          <Button
            key={index+1}
            mx={1}
            color="white"
            backgroundColor={index + 1 === currentPage ? "darkslateblue" : "grey"}
            onClick={() => setNewPage(index+1)}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
    </Flex>
   );
}

