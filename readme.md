# Shoes E-Commerce App

Modern bir ayakkabı e-ticaret uygulaması. React, TypeScript, TanStack Query ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Ürün Listesi**: Tüm ayakkabıları görüntüleme
- **Ürün Detayı**: Detaylı ürün bilgileri ve görselleri
- **Ürün Ekleme**: Yeni ayakkabı ürünü ekleme formu
- **Ürün Düzenleme**: Mevcut ürünleri düzenleme
- **Ürün Silme**: Ürünleri kaldırma
- **Responsive Tasarım**: Mobil ve desktop uyumlu
- **Real-time Updates**: TanStack Query ile otomatik veri güncelleme

## 🛠️ Teknolojiler

- **Frontend**: React 19, TypeScript
- **State Management**: TanStack Query (React Query)
- **Styling**: Tailwind CSS
- **Form Management**: Formik + Yup validation
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Icons**: React Icons

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
```

## 🏗️ Proje Yapısı

```
client/src/
├── components/     # UI bileşenleri
├── hooks/         # Custom React hooks
├── pages/         # Sayfa bileşenleri
├── services/      # API servisleri
├── types/         # TypeScript tip tanımları
└── utils/         # Yardımcı fonksiyonlar
```

## 🎯 Kullanım

1. Ana sayfada ürün listesini görüntüleyin
2. Ürün detaylarını görmek için ürüne tıklayın
3. Yeni ürün eklemek için "Add Product" butonunu kullanın
4. Ürünleri düzenlemek için edit butonunu kullanın
5. Ürünleri silmek için delete butonunu kullanın

## 🔧 API Endpoints

- `GET /shoes` - Tüm ürünleri getir
- `GET /shoes/:id` - Belirli ürünü getir
- `POST /shoes` - Yeni ürün ekle
- `PUT /shoes/:id` - Ürün güncelle
- `DELETE /shoes/:id` - Ürün sil

## 📱 Ekran Görüntüleri

<!-- GIF buraya eklenecek -->

![](./gif.gif)
