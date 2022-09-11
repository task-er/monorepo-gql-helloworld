```
  $ yarn add class-validator
```

```
  $ yarn add uuid
```


gql
```
  mutation {
    createUser(createUserData: { email: "test@example.com", age: 23 }) {
      userId
      email
      isSubscribed
      age
    }
  }
```

```
  mutation {
    updateUser(updateUserData: {
      userId: "fa545b36-aa12-4fa9-9048-f4beaec6cd05",
      age: 33,
    }) {
      userId
      email
      isSubscribed
      age
    }
  }
```

```
  mutation {
    deleteUser(deleteUserData: {
      userId: "db110f81-8d38-4c00-ac39-09af770f01db",
    }) {
      userId
      email
      isSubscribed
      age
    }
  }
```

```
  query {
    user(userId: "db110f81-8d38-4c00-ac39-09af770f01db") {
      userId
      email
      age
      isSubscribed
    }
  }
```

```
  query {
    users(userIds: [
      "886e74d1-a568-4e11-8b62-c57fd35f3241",
      "db110f81-8d38-4c00-ac39-09af770f01db",
      "24346156-662a-49b4-99aa-8801f811761f"
    ]) {
      userId
      email
      age
    }
  }
```