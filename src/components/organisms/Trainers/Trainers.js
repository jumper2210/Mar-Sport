import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Trainer from './Trainer'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0%;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  z-index: 10;
  padding: 5rem 0 17rem 0;
  align-items: center;
  ${({ theme }) => theme.mq.md} {
    padding: 5rem 0 30rem 0;
  }
`
const TypographyWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 20;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 3rem 6rem 3rem;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.mq.md} {
    justify-content: space-evenly;
    width: 80%;
    padding-top: 7rem;
  }
`
const TrainersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  width: 80%;
  gap: 7rem;
  justify-items: center;
  align-items: center;
  ${({ theme }) => theme.mq.md} {
    grid-template-rows: 1fr;
    grid-template-columns: 0.5fr 0.5fr;
    padding: 5rem 0rem 0rem 5rem;
  }
`
const Heading = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.colors.color_secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fonts.subFont};
  ${({ theme }) => theme.mq.md} {
    text-transform: uppercase;
  }
`

const Paragraph = styled.p`
  padding-top: 5rem;
  color: ${({ theme }) => theme.colors.color_secondary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 2.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.fontSize.xlg};
    padding: 5rem 5rem 0rem 5rem;
  }
`
const Svg = styled.svg`
  position: absolute;
  bottom: 0;

  ${({ theme }) => theme.mq.xxl} {
    transform: translateY(20%);
  }
`
const Trainers = () => {
  const { allTrainersJson } = useStaticQuery(graphql`
    {
      allTrainersJson(sort: { fields: order }) {
        nodes {
          fullName
          description
          image {
            childImageSharp {
              fluid(maxWidth: 880, maxHeight: 581, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="trainers">
      <TypographyWrapper>
        <Heading>Nasi instruktorzy</Heading>
        <Paragraph>
          Zapisy prowadzą instruktorzy nauki pływania posiadający państwowe
          uprawnienia i duże doświadczenie w prowadzeniu zajęć nauki pływania.
        </Paragraph>
      </TypographyWrapper>
      <TrainersWrapper>
        {allTrainersJson.nodes.map(({ fullName, description, image }) => (
          <Trainer
            key={fullName}
            fullName={fullName}
            description={description}
            image={image.childImageSharp.fluid}
          />
        ))}
      </TrainersWrapper>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#15498b"
          fill-opacity="1"
          d="M0,128L40,122.7C80,117,160,107,240,106.7C320,107,400,117,480,138.7C560,160,640,192,720,181.3C800,171,880,117,960,117.3C1040,117,1120,171,1200,202.7C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </Svg>
    </Wrapper>
  )
}

export default Trainers
