# İlhan Su Depoları

Next.js ve Payload CMS tabanlı kurumsal web sitesi.

## Gereksinimler

- Node.js 20 veya üzeri
- pnpm

## Yerel geliştirme

```bash
pnpm install
pnpm dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde açılır. Payload
yönetim paneli `http://localhost:3000/admin` adresindedir.

Yerel geliştirmede SQLite kullanılır ve veritabanı proje kökündeki
`sudeposu.db` dosyasında tutulur. PostgreSQL kullanmak için `DATABASE_URI`
ortam değişkenini geçerli bir PostgreSQL bağlantı adresi olarak tanımlayın.

## Komutlar

```bash
pnpm dev
pnpm build
pnpm lint
pnpm start
```
