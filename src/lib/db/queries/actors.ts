export const sqlActors = `
SELECT 
    CONCAT(m.name, ' ', m.surname) AS fullname,
    ms.id AS membershipStatusId,
    m.imgPath,
    m.alt,
    m.identifier,
    m.dateOfJoining,
    ms.status AS membershipStatus
FROM members m 
INNER JOIN membershipStatus ms ON ms.id = m.membershipStatus
LEFT JOIN awards a ON m.id = a.memberId
WHERE m.active = 1
  AND m.membershipStatus != 5
GROUP BY 
    m.name, 
    m.surname, 
    ms.status, 
    m.imgPath, 
    m.alt, 
    m.identifier, 
    m.dateOfJoining, 
    m.membershipStatus
ORDER BY COUNT(a.id) DESC, m.dateOfJoining;

`

export const sqlActor = `
select 
    m.id,
    CONCAT(m.name, ' ', m.surname) fullname,
    m.imgPath,
    m.alt,
    mt.motto
from members m 
inner join mottos mt on mt.memberId = m.id
where 1=1
and m.identifier = ?
and mt.scriptId = 2
and m.active = 1
and m.membershipStatus != 5;
`

export const sqlBiography = `
select 
    paragraph
from biographies b
inner join members m on m.id = b.memberId
where 1 = 1
and m.identifier = ?
and b.scriptId = 2
`