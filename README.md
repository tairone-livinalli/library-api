# My Library API

This project aims to serve a front-end for managing and booking books to read.

## Running the application

### Pre-requisites

- Node
- Mongo DB instance

```bash
  git clone https://github.com/tairone-livinalli/library-api.git
  cd library-api
  yarn && yarn dev
```

The application will show a message in the terminal if it's running successfully.

## API Reference

### Get all items

```http
  POST /api/bookings
```

| Parameter     | Type     | Description                               |
| :------------ | :------- | :---------------------------------------- |
| `username`    | `string` | **Required**. The user's username         |
| `title`       | `string` | **Required**. Title of the book           |
| `firstAuthor` | `string` | **Required**. The main author of the book |

## Next steps

- Listing the bookings of one user
- Adding custom books
