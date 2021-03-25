import React from 'react'
import teamMembers from './team-members'

const teamMembersJsx = teamMembers.map(teamMember => {
  return (
    <div key={teamMember.id}>
      <div>
        <h3>{teamMember.name}</h3>
      </div>

      <p>
        {teamMember.description}
      </p>
    </div>
  )
})

const TeamMembers = () => (
  <div>
    {teamMembersJsx}
  </div>
)

export default TeamMembers
