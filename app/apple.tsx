export default async function Apple() {
  const start = Date.now()
  await fetch("https://appleid.apple.com/.well-known/openid-configuration", {
    cache: "no-store"
  }).then(v => v.json())
  const delay = Date.now() - start
  return (
    <main>
      https://appleid.apple.com/.well-known/openid-configuration delay: {delay}ms
    </main>
  );
}