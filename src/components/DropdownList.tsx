import React from 'react'
import styled from 'styled-components'
import { CategoryKey, SuggestionCategories } from '../utils/typesApi'

type NameKey = 'collectionName' | 'trackName' | 'artistName'

interface DropdownListProperties {
  suggestionCategories: SuggestionCategories
}

export default function DropDownList({
  suggestionCategories,
}: DropdownListProperties) {
  return (
    <DropDownListRaw>
      {Object.keys(suggestionCategories).map((category) => {
        return (
          <div key={category}>
            <h3>{category.toUpperCase()}</h3>
            {suggestionCategories[category].map((suggestion) => (
              <li
                key={suggestion[`${suggestion.wrapperType}Id` as CategoryKey]}
              >
                {suggestion[`${suggestion.wrapperType}Name` as NameKey]}
              </li>
            ))}
          </div>
        )
      })}
    </DropDownListRaw>
  )
}

const DropDownListRaw = styled.ul`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  list-style: none;
  padding: 4px 8px;
  margin: 0;
  h3 {
    font-size: 14px;
    color: #afafaf;
    font-weight: 500;
    margin: 2px 0;
  }
  li {
    padding: 4px;
    color: #434343;
    border-radius: 4px;
    cursor: pointer;
  }
  li:hover {
    background: #f6f6f6;
  }
`
