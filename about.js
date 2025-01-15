```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause an error in Next.js 15
  const myVar = 10;
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>The variable myVar has the value: {myVar}</p>
    </div>
  );
}
export default About;
```