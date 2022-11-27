import React, { PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'

const PaginationLink = ({ ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <Link
      {...props}
      className='flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50'
    />
  )
}

export const PaginationLinks = ({ currentPage, hasPreviousPage, hasNextPage }: {
  currentPage: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}) => {
  return (
    <div className='flex justify-end gap-2'>
      <PaginationLink to={`/?page=${currentPage - 1}`}>Previous</PaginationLink>
      <PaginationLink to={`/?page=${currentPage + 1}`}>Next</PaginationLink>
    </div>
  )
}
