import React, { useState } from 'react'
import styled from 'styled-components'
import { SuggestionCategories } from '../utils/typesApi'
import LoadingSpiner from './LoadingSpiner'
import DropDownList from './DropdownList'

type SearchBarProps = {
  setSearchText: (text: string) => void
  searchText: string
  suggestionCategories: SuggestionCategories
  loading: boolean
}

export default function SearchBar({
  setSearchText,
  loading,
  suggestionCategories,
  searchText,
}: SearchBarProps) {
  const [isFocus, setIsFocus] = useState(false)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value)
  }
  return (
    <SearchBarContainer>
      <span className="material-symbols-outlined">search</span>
      <SearchInput
        value={searchText}
        onChange={handleInputChange}
        onBlur={() => setIsFocus(false)}
        onFocus={() => setIsFocus(true)}
      ></SearchInput>
      {loading && <LoadingSpiner></LoadingSpiner>}

      {isFocus &&
        searchText &&
        (suggestionCategories.artist.length > 0 ||
          suggestionCategories.collection.length > 0 ||
          suggestionCategories.track.length > 0) && (
          <DropdownContainer>
            <DropDownList
              suggestionCategories={suggestionCategories}
            ></DropDownList>
          </DropdownContainer>
        )}
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 8px;
  padding: 0 15px;
  position: relative;
  margin: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  height: 40px;
  padding: 0 5px;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
  :focus-visible {
    outline: none;
  }
`
const DropdownContainer = styled.div`
  border: 1px solid #ededed;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: white;
  margin: 0;
  top: 36px;
  left: -1px;
  width: 100%;
  position: absolute;
`
