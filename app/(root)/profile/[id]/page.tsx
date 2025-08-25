import React from 'react'

const page = async ({params}: ParamsWithSearch) => {
    const { id } = await params;
  return (
    <div>user id : {id}</div>
  )
}

export default page