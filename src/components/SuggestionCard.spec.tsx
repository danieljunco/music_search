import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Suggestion } from '../utils/typesApi'
import SuggestionCard from '../components/SuggestionCard'

describe('loads and display a suggestion', () => {
  const suggestion: Suggestion = {
    wrapperType: 'artist',
    artistName: 'David Bowie',
    artistLinkUrl: 'https://music.apple.com/us/artist/david-bowie/551695?uo=4',
    artistId: 551695,
    primaryGenreName: 'Rock',
  }

  test('the suggestion is render correctly', () => {
    render(<SuggestionCard suggestion={suggestion}></SuggestionCard>)

    expect(screen.getByTestId('suggestion-card-artist-name')).toHaveTextContent(
      suggestion.artistName as string
    )
  })
})
