import React from 'react'
import teamMembers from './team-members'
import limg from './linkedinicon.png'
import pimg from './websiteicon.png'

// create component out
const TeamMemberCards = () => {
  // refer to each one as member

  return (
    <div className="team-members">
      {teamMembers.map(member => (
        <div className="member" key={member.id}>
          <img
            src={member.backgroundUrl}
            alt={member.name}
            className="profile-pic"
          />
          <div className="demo-info">
            <p className="name">{member.name}</p>
            <p className="role">{member.description}</p>
          </div>
          <div className="social-icons">
            <a href={member.linkedin} target="_blank" rel="noreferrer">
              <img
                src={limg}
                alt={`${member.name} LinkedIn`}
                className="icon"
              />
            </a>
            <a href={member.portfolio} target="_blank" rel="noreferrer">
              <img
                src={pimg}
                alt={`${member.name} portfolio`}
                className="icon"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

// export
export default TeamMemberCards
