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