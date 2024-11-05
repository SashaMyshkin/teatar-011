export const sqlAwards = `

SELECT 
    f.name as festivalName,
    YEAR(f.eventDate) AS year,
    aw.name as award,
    CONCAT(m.name, ' ', m.surname) memberFullName,
    r.role as note,
    p.name as performanceName,
    a.awardTypeId,
    m.identifier as memberIdentifier,
    p.identifier as performanceIdentifier
FROM 
    awards a
INNER JOIN 
    festivals f ON f.id = a.festivalId
INNER JOIN 
    members m ON m.id = a.memberId
INNER JOIN 
    awardType aw ON aw.id = a.awardTypeId
INNER JOIN 
    performances p ON p.id = a.performanceId
LEFT JOIN roles r ON r.id = a.roleId
WHERE 

    p.identifier = ?
    or
    m.identifier = ?


order by ifnull(f.importance, 0) desc, f.eventDate, aw.importance;`