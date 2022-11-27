import React, { PropsWithChildren } from 'react'

export const PokemonDescriptionList = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-t border-gray-200">
      <dl>{children}</dl>
    </div>
  )
}

export const PokemonDescriptionListRow = ({ children }: PropsWithChildren) => {
  return (
    <div className="odd:bg-gray-50 even:bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 last:rounded-b-lg">
      {children}
    </div>
  )
}

export const PokemonDescriptionTerm = ({ children }: PropsWithChildren) => {
  return (
    <dt className="text-sm font-medium text-gray-500">{children}</dt>
  )
}

export const PokemonDescriptionDetails = ({ children }: PropsWithChildren) => {
  return (
    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{children}</dd>
  )
}
