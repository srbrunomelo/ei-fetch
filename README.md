<h1 align="center">ei-fetch</h1>
<p>
  Simple and powerful fetching library for React. Use hooks to fetch data!
</p>
 

✅ Zero dependencies (react, react-dom as peer deps)

✅ Use hooks  

## Documentation

## Short example of use

```js
import { useFetch } from "ei-fetch";

const fetchUsersList = {
  url: 'https://jsonplaceholder.typicode.com/users'
};

export const UsersListContainer = () => {
  const { data, isError, isLoading } = useFetch(fetchUsersList);

  if (isLoading) return <h1>isLoading</h1>;
  if (isError) return <h1>isErroro</h1>;

  return <UsersList isLoading={isLoading} isError={isError} users={data} />;
};
```

## Typescript support


## Inspirations

- [react-fetching-library](https://github.com/marcin-piela/react-fetching-library)
- [react-query](https://github.com/tannerlinsley/react-query)
