import React, { PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import clsx from 'clsx'

const PaginationLink = ({ disabled, ...props }: PropsWithChildren<LinkProps & { disabled: boolean }>) => {
  const commonClassName = 'flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium'

  if (disabled) {
    return (
      <span className={clsx(commonClassName, 'bg-slate-200 text-gray-500')} >
        {props.children}
      </span>
    )
  }

  return (
    <Link
      {...props}
      className={clsx(commonClassName, 'bg-white text-gray-500 hover:bg-gray-50')}
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
      <PaginationLink to={`/?page=${currentPage - 1}`} disabled={!hasPreviousPage}>Previous</PaginationLink>
      <PaginationLink to={`/?page=${currentPage + 1}`} disabled={!hasNextPage}>Next</PaginationLink>
    </div>
  )
}
