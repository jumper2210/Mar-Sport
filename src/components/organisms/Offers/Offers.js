import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Offer from './Offer'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.section`
  position: relative;
  top: 0;
  padding-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.color_secondary};
  z-index: 10;
`
const HeadingWrappper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding-bottom: 10rem;
`
const OffersWrapper = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: repeat(3, 25rem);
  grid-template-columns: 1fr;
  width: 80%;
  gap: 8rem;
  ${({ theme }) => theme.mq.md} {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
  }
`
const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
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
            <Fade bottom>
              <Offer
                key={icon}
                name={name}
                trainer={trainer}
                description={description}
                icon={icon}
                borderColor={borderColor}
              />
            </Fade>
          )
        )}
      </OffersWrapper>
    </Wrapper>
  )
}

export default Offers
