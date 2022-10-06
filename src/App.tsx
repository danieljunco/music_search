import React, { useState, useEffect } from 'react'
import AppContainer from './components/AppContainer'
import PageContainer from './components/PageContainer'
import SuggestionList from './components/SuggestionList'
import SearchBar from './components/SearchBar'
import searchApiClient from './utils/searchApiClient'
import styled from 'styled-components'
import { isApiError, SuggestionCategories } from './utils/typesApi'

function App() {
  const [searchText, setSearchText] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [suggestionCategories, setSuggestionCategories] =
    useState<SuggestionCategories>({
      artist: [],
      collection: [],
      track: [],
    })

  useEffect(() => {
    setLoading(true)
    const timerId = setTimeout(async () => {
      const albumResponse = await searchApiClient.getSuggestionList(
        searchText,
        'album'
      )
      const artistResponse = await searchApiClient.getSuggestionList(
        searchText,
        'musicArtist'
      )
      const trackResponse = await searchApiClient.getSuggestionList(
        searchText,
        'musicTrack'
      )
      if (
        isApiError(albumResponse) ||
        isApiError(artistResponse) ||
        isApiError(trackResponse)
      )
        console.log('error')
      else {
        setSuggestionCategories({
          artist: artistResponse.results,
          collection: albumResponse.results,
          track: trackResponse.results,
        })
      }
      setLoading(false)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [searchText])

  return (
    <AppContainer>
      <PageContainer>
        <Title>MusicSearch</Title>
        <SearchBar
          setSearchText={setSearchText}
          searchText={searchText}
          loading={loading}
          suggestionCategories={suggestionCategories}
        ></SearchBar>
        {(suggestionCategories.artist.length > 0 ||
          suggestionCategories.collection.length > 0 ||
          suggestionCategories.track.length > 0) && (
          <SuggestionList
            suggestionCategories={suggestionCategories}
          ></SuggestionList>
        )}
      </PageContainer>
    </AppContainer>
  )
}

const Title = styled.h1`
  text-align: center;
  margin-top: 60px;
  font-style: italic;
  font-size: 24px;
  font-weight: 900;
`

export default App
