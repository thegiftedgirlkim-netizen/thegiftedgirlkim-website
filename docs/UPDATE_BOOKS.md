# How to Update Book Amazon Links

Book listings live in **`src/data/books.json`**. The author page URL lives in **`src/data/site.json`** under `amazonAuthor`.

## Author page (all books)

```json
"amazonAuthor": {
  "url": "https://www.amazon.com/THE-GIFTED-GIRL-KIM/e/B0GXY64PCX",
  "label": "View all books on Amazon"
}
```

This powers the banner on the Books page and the About page button.

## Individual books

Each book has `links.amazon`:

```json
"links": {
  "amazon": "https://www.amazon.com/.../dp/B0XXXXXXXX"
}
```

Use `amazon.ca` URLs as-is — the site shows **View on Amazon.ca →** automatically.

When `links.amazon` is empty, the card shows **Coming Soon**.

## Current catalog

| Book | Amazon URL |
|------|------------|
| Through My Eyes | Author page (until direct ASIN is added) |
| Attraverso I Miei Occhi (Italian) | [B0GZCNS5YQ](https://www.amazon.com/ATTRAVERSO-MIEI-OCCHI-ricevute-Italian-ebook/dp/B0GZCNS5YQ) — cover from Amazon image `814Dz7YoRpL` |
| The Unexpected Soulmate | [B0GX4667X1](https://www.amazon.com/UNEXPECTED-SOULMATE-GIFTED-GIRL-KIM-ebook/dp/B0GX4667X1) |

After editing JSON, run `npm run build` and deploy.
