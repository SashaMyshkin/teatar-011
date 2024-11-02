export default async function Page({
    params,
  }: {
    params: Promise<{ ident: string }>
  }) {
    const ident = (await params).ident
    return <div>My Post: {ident}</div>
  }