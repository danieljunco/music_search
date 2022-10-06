import React, { useState, useEffect } from 'react'
import { Suggestion } from '../utils/typesApi'
import styled from 'styled-components'
import searchApiClient from '../utils/searchApiClient'

type CategoryKeyName = 'collectionName' | 'artistName' | 'trackName'

export default function SuggesstionCard({
  suggestion,
}: {
  suggestion: Suggestion
}) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    const {
      trackViewUrl = '',
      artistLinkUrl = '',
      collectionViewUrl = '',
    } = suggestion
    setUrl(trackViewUrl || artistLinkUrl || collectionViewUrl)
  }, [suggestion])

  return (
    <CardContainer>
      <ImageWrapper
        alt=""
        src={searchApiClient.buildSuggestionPreviewImageUrl(
          suggestion.artworkUrl60 as string
        )}
      ></ImageWrapper>
      <SuggestionDetails>
        <div>
          <h2 data-testid="suggestion-card-artist-name">
            {suggestion[`${suggestion.wrapperType}Name` as CategoryKeyName]}
          </h2>
          <p>
            {suggestion.releaseDate
              ? `Released on ${suggestion.releaseDate}`
              : `Genre: ${suggestion.primaryGenreName}`}
          </p>
          <a href={url}>view in iTunes</a>
        </div>
      </SuggestionDetails>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  border: 1px solid #ececec;
  background-color: white;
  border-radius: 4px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  max-height: 100px;
`
const SuggestionDetails = styled.div`
    padding: 10px 10px;
    h2 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 500;
        }
    }
    p {
        font-size: 14px;
        margin-top: 10px;
        color: #c0c0c0;
    }
    a {
        text-decoration: none;
    }
`

const ImageWrapper = styled.img`
  width: 100px;
  height: 100px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border: none;
`
