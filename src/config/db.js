

 export const dbConfig = {
  name: 'UserDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'users',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'username', keypath: 'username', options: { unique: true } },
        { name: 'password', keypath: 'password', options: { unique: false } },
        { name: 'status', keypath: 'status', options: { unique: false } },
        { name: 'previousLogins', keypath: 'previousLogins', options: { unique: false } },
      ],
    },
  ],
};




