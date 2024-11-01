export const sqlActors = `
SELECT 
    CONCAT(m.name, ' ', m.surname) AS fullname,
    ms.id AS membershipStatusId,
    m.img,
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
    m.img, 
    m.alt, 
    m.identifier, 
    m.dateOfJoining, 
    m.membershipStatus
ORDER BY COUNT(a.id) DESC, m.dateOfJoining;

`