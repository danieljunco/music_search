import styled from 'styled-components'
import { CategoryKey, SuggestionCategories } from '../utils/typesApi'
import SuggesstionCard from './SuggestionCard'

interface DropdownListProperties {
  suggestionCategories: SuggestionCategories
}

export default function SuggestionList({
  suggestionCategories,
}: DropdownListProperties) {
  return (
    <SuggestionListWrapper>
      <SuggestionListRaw>
        {Object.keys(suggestionCategories).map((category) =>
          suggestionCategories[category].map((suggestion) => (
            <li key={suggestion[`${suggestion.wrapperType}Id` as CategoryKey]}>
              <SuggesstionCard suggestion={suggestion}></SuggesstionCard>
            </li>
          ))
        )}
      </SuggestionListRaw>
    </SuggestionListWrapper>
  )
}

const SuggestionListRaw = styled.ul`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  margin-bottom: 20px;
  list-style: none;
  padding: 0;
  width: 100%;
`
const SuggestionListWrapper = styled.div`
  display: flex;
  padding: 10px;
`
