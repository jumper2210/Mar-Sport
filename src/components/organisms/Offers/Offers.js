import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Offer from './Offer'

const Wrapper = styled.section`
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
`
const HeadingWrappper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 6rem 0;
`
const OffersWrapper = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: repeat(3, 27rem);
  grid-template-columns: 1fr;
  width: 80%;
  gap: 8rem;
`
const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.color_secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fonts.subFont};
  align-text: center;
`

const Offers = () => {
  const { allOffersJson } = useStaticQuery(graphql`
    {
      allOffersJson(sort: { fields: order }) {
        nodes {
          name
          trainer
          description
          icon {
            publicURL
          }
          borderColor
        }
      }
    }
  `)

  return (
    <Wrapper id="offers">
      <HeadingWrappper>
        <Heading>Nasza oferta</Heading>
      </HeadingWrappper>
      <OffersWrapper>
        {allOffersJson.nodes.map(
          ({ name, trainer, description, icon, borderColor }) => (
            <Offer
              key={icon}
              name={name}
              trainer={trainer}
              description={description}
              icon={icon}
              borderColor={borderColor}
            />
          )
        )}
      </OffersWrapper>
    </Wrapper>
  )
}

export default Offers
