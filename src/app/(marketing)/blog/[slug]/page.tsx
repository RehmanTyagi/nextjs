import React from 'react'

const BlogPostPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const param = await searchParams
  return (
    <div>
      <h1>Blog Post Page: {Object.values(param).join(", ")}</h1>
    </div>
  )
}

export default BlogPostPage
