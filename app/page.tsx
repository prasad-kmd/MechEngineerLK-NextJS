export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl">
          Mozilla Headline Font (Heading)
        </h1>
        <p className="mt-4 font-sans text-lg">
          Inter Font (Sans-serif Body)
        </p>
        <p className="mt-2 font-google-sans text-lg">
          Google Sans Font (Google Sans)
        </p>
        <p className="mt-2 font-roboto text-lg">
          Roboto Font (Roboto)
        </p>
        <code className="mt-4 block rounded-md bg-muted p-4 font-mono text-sm">
          JetBrains Mono Font (Monospace Code)
        </code>
      </div>
    </main>
  );
}
