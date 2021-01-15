import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Trainer from './Trainer'
import WaveTop from 'assets/images/waveTop.png'
import WaveBottom from 'assets/images/waveBottom.png'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  background: ${({ theme }) => theme.colors.color_secondary};
`
const HeadingWrappper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 6rem 0;
`
const TrainersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  width: 80%;
  gap: 8rem;
`
const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fonts.subFont};
  align-text: center;
`

const WaveBottomImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  transform: translateY(20%);
`
const WaveTopImg = styled.img`
  height: 30%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  transform: translateY(-40%);
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
      <WaveTopImg src={WaveTop} />
      <HeadingWrappper>
        <Heading>Nasi instruktorzy</Heading>
      </HeadingWrappper>
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
      <WaveBottomImg src={WaveBottom} />
    </Wrapper>
  )
}

export default Trainers
