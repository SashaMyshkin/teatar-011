export const sqlRepertoire = 
    `select 
        name,
        pathname identifier,
        img as oldImg,
        slogan,
        alt,
        '' posterPath
    from performances
    where active = 1
    order by premiereDate desc;`;