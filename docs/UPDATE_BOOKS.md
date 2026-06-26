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
| The Unexpected Soulmate | [B0GX4667X1](https://www.amazon.com/UNEXPECTED-SOULMATE-GIFTED-GIRL-KIM-ebook/dp/B0GX4667X1) |
| Elvis Presley: Then and Now (English) | [B0GXX95K1H](https://www.amazon.com/ELVIS-PRESLEY-THEN-NOW-GIFTED-GIRL-ebook/dp/B0GXX95K1H) |
| The Gifted Girl Kim (Japanese) | [B0GX2ZS37Z](https://www.amazon.ca/GIFTED-GIRL-KIM-Japanese-ebook/dp/B0GX2ZS37Z) |
| Attraverso I Miei Occhi (Italian) | [B0GZCNS5YQ](https://www.amazon.com/ATTRAVERSO-MIEI-OCCHI-ricevute-Italian-ebook/dp/B0GZCNS5YQ) — cover from Amazon image `814Dz7YoRpL` |
| Elvis Presley: Then and Now (Italian) | [B0GZF9LFGT](https://www.amazon.com/-/es/GIFTED-GIRL-KIM-ebook/dp/B0GZF9LFGT) |
| Elvis Presley: Antes y Ahora (Spanish) | [B0GZFCRZ3R](https://www.amazon.com/ELVIS-PRESLEY-ANTES-AHORA-GIFTED-GIRL-ebook/dp/B0GZFCRZ3R) |

After editing JSON, run `npm run build` and deploy.
