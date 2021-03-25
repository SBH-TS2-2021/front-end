import React from 'react'
// import data
import teamMembers from './team-members'
import Card from 'react-bootstrap/Card'

const cardContainerLayout = {
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'row wrap'
}

// create component out
const TeamMemberCards = () => {
  // refer to each one as member
  const teamCards = teamMembers.map(member => {
    return (
      <Card key={member.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={member.backgroundUrl} />
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          <Card.Text>{member.description}</Card.Text>
        </Card.Body>
      </Card>
    )
  })
  return (
    <div style={cardContainerLayout}>
      { teamCards }
    </div>
  )
}

// export
export default TeamMemberCards
