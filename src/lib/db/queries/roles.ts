export const sqlRoles = `
select 
    p.name as performanceName,
    r.role as roleName,
    CONCAT(m.name, ' ', m.surname) memberFullName,
    m.identifier as memberIdentifier,
    p.identifier as performanceIdentifier
from rolesMembers rm
inner join roles r on rm.roleId = r.id
inner join performances p on p.id = r.performanceId
inner join members m on rm.memberId = m.id
where m.active = 1
and p.active = 1
and 
    (
        p.identifier=?
        or
        m.identifier=? 
    )


order by r.id
`