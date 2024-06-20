

export default async function Home() {
  const start = Date.now()
  await fetch("https://appleid.apple.com/.well-known/openid-configuration").then(v => v.json())
  const delay = Date.now() - start
  return (
    <main>
      https://appleid.apple.com/.well-known/openid-configuration delay: {delay}ms
    </main>
  );
}
export const dynamic = 'force-dynamic'