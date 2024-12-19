```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>    
    </div>
  );
}

//Added a pages directory with necessary files (index.js, about.js)
export default MyComponent;
```