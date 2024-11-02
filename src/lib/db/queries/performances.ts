export const sqlRepertoire = 
    `select 
        name,
        identifier,
        slogan,
        alt,
        posterPath
    from performances
    where active = 1
    order by premiereDate desc;`;

export const sqlPerformance = `
    select 
        id,
        name as performanceName,
        slogan
    from performances
    where pathname = ?
    and active = 1;
`;

export const sqlAboutPerformance = `
    select 
        a.paragraph,
        a.imgPath,
        a.alt
    from aboutPerformances a
    inner join performances p on p.id = a.performanceId
    where 1 = 1
    and p.identifier = ?
    and a.scriptId = 2
`;