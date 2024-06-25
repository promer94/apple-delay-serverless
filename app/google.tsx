export default async function Google() {
  const start = Date.now()
  await fetch("https://accounts.google.com/.well-known/openid-configuration", {
    cache: "no-store"
  }).then(v => v.json())
  const delay = Date.now() - start
  return (
    <main>
      https://accounts.google.com/.well-known/openid-configuration delay: {delay}ms
    </main>
  );
}