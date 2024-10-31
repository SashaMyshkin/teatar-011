export const sqlRepertoire = 
    `select 
        name,
        pathname,
        img,
        slogan,
        alt
    from performances
    where active = 1
    order by premiereDate desc;`;